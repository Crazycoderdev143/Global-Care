import {NextResponse} from "next/server";
import {hash} from "bcryptjs";
import prisma from "@/lib/prisma"; // Ensure prisma is exported here
import {Role} from "@prisma/client";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      username,
      email,
      mobile,
      password,
      profileImg,
      role,
      additionalInfo, // role-specific info
    } = body;

    if (!username || !email || !password || !role) {
      return NextResponse.json(
        {error: "Missing required fields"},
        {status: 400}
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {OR: [{email}, {username}]},
    });

    if (existingUser) {
      return NextResponse.json({error: "User already exists"}, {status: 400});
    }

    // Hash password
    const hashedPassword = await hash(password, 12);

    // Create user base record
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        mobile,
        password: hashedPassword,
        profileImg,
        role,
        lastLoggedin: new Date(),
        otp: Math.floor(100000 + Math.random() * 900000),
        otpExpiryTime: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes from now
      },
    });

    // Attach role-specific record
    switch (role) {
      case Role.DOCTOR:
        await prisma.doctor.create({
          data: {
            userId: newUser.id,
            ...additionalInfo,
          },
        });
        break;
      case Role.PATIENT:
        await prisma.patient.create({
          data: {
            userId: newUser.id,
            personalDetails: additionalInfo.personalDetails || {},
            medicalHistory: additionalInfo.medicalHistory || {},
          },
        });
        break;
      case Role.ADMINISTRATOR:
        await prisma.administrator.create({
          data: {
            userId: newUser.id,
            permissions: additionalInfo.permissions || [],
          },
        });
        break;
      case Role.MEDICINE_ADMIN:
        await prisma.medicineAdmin.create({
          data: {
            userId: newUser.id,
            permissions: additionalInfo.permissions || [],
          },
        });
        break;
      case Role.DELIVERY_BOY:
        await prisma.deliveryBoy.create({
          data: {
            userId: newUser.id,
            vehicleType: additionalInfo.vehicleType,
            vehicleNo: additionalInfo.vehicleNo,
          },
        });
        break;
    }

    return NextResponse.json(
      {message: "User created successfully", userId: newUser.id},
      {status: 201}
    );
  } catch (error) {
    console.error("[SIGNUP_ERROR]", error);
    return NextResponse.json({error: "Something went wrong"}, {status: 500});
  }
}

// performance optimization, efficiency, maintainability, readability and security
