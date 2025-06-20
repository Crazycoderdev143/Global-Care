import {handler} from "./options";

export {handler as GET, handler as POST};



// import {PrismaClient} from "../src/generated/prisma";

// const prisma = new PrismaClient();

// async function main() {
//   // Create a base user (Doctor)
//   const doctorUser = await prisma.user.create({
//     data: {
//       username: "drsmith",
//       email: "drsmith@example.com",
//       mobile: "9999999999",
//       password: "hashedpassword",
//       isVerified: true,
//       role: "DOCTOR",
//       doctor: {
//         create: {
//           qualification: ["MBBS", "MD"],
//           experience: 10,
//           specialization: "Cardiology",
//           city: "Delhi",
//           consultantFees: 1000,
//           slotDate: new Date("2025-06-18"),
//           slotStart: new Date("2025-06-18T09:00:00Z"),
//           slotEnd: new Date("2025-06-18T11:00:00Z"),
//         },
//       },
//     },
//   });

//   // Create a patient
//   const patientUser = await prisma.user.create({
//     data: {
//       username: "john_doe",
//       email: "john@example.com",
//       mobile: "8888888888",
//       password: "hashedpassword",
//       isVerified: true,
//       role: "PATIENT",
//       patient: {
//         create: {
//           dob: new Date("1990-01-01"),
//           gender: "Male",
//           bloodGroup: "O+",
//           emergencyContact: "911234567890",
//           medicalHistory: {
//             allergies: ["penicillin"],
//             conditions: ["asthma"],
//           },
//         },
//       },
//       addresses: {
//         create: {
//           street: "123 Main St",
//           city: "Mumbai",
//           state: "Maharashtra",
//           postalCode: "400001",
//           country: "India",
//         },
//       },
//     },
//   });

//   // Create appointment
//   await prisma.appointment.create({
//     data: {
//       date: new Date("2025-06-19"),
//       time: new Date("2025-06-19T10:00:00Z"),
//       notes: "Follow-up for chest pain",
//       doctorId: doctorUser.id,
//       patientId: patientUser.id,
//     },
//   });

//   // Create an administrator
//   await prisma.user.create({
//     data: {
//       username: "admin1",
//       email: "admin@example.com",
//       mobile: "7777777777",
//       password: "hashedpassword",
//       isVerified: true,
//       role: "ADMINISTRATOR",
//       admin: {
//         create: {
//           permissions: ["MANAGE_USERS", "VIEW_REPORTS"],
//         },
//       },
//     },
//   });

//   // Create a medicine admin
//   await prisma.user.create({
//     data: {
//       username: "pharma_admin",
//       email: "pharma@example.com",
//       mobile: "6666666666",
//       password: "hashedpassword",
//       isVerified: true,
//       role: "MEDICINE_ADMIN",
//       medicineAdmin: {
//         create: {
//           permissions: ["MANAGE_INVENTORY"],
//         },
//       },
//     },
//   });

//   // Create a delivery boy and assign an order
//   const deliveryBoyUser = await prisma.user.create({
//     data: {
//       username: "delivery1",
//       email: "delivery1@example.com",
//       mobile: "5555555555",
//       password: "hashedpassword",
//       isVerified: true,
//       role: "DELIVERY_BOY",
//       deliveryBoy: {
//         create: {
//           vehicleType: "Bike",
//           vehicleNo: "MH12XY1234",
//         },
//       },
//     },
//     include: {
//       deliveryBoy: true,
//     },
//   });

//   const order = await prisma.order.create({
//     data: {
//       orderCode: "ORD123456",
//       description: "Paracetamol, Cough Syrup",
//       customerName: "Jane Doe",
//       customerPhone: "9000000000",
//       address: {
//         name: "Home",
//         location: "Chennai",
//       },
//       deliveryDate: new Date("2025-06-20"),
//       deliveryBoyId: deliveryBoyUser.id,
//       deliveryStatus: "IN_TRANSIT",
//       paymentStatus: "PAID",
//     },
//   });

//   await prisma.tracking.create({
//     data: {
//       orderId: order.id,
//       location: {
//         lat: 13.0827,
//         lng: 80.2707,
//         address: "Anna Salai, Chennai",
//       },
//       statusNote: "Package picked up",
//     },
//   });

//   console.log("🌱 Seeded successfully!");
// }

// main()
//   .catch((e) => {
//     console.error("❌ Error seeding database:", e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
