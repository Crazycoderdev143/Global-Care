import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { forgetPasswordValidation } from '../../../typeValidations/forgetPasswordValidation'

export async function POST(req: Request) {
  try {
    // const { email } = await req.json()
    const body = await req.json()
    const passresult = forgetPasswordValidation.safeParse(body)
    if (!passresult.success) {
      return NextResponse.json(
        { error: 'Invalid email or username' },
        { status: 400 }
      )
    }

    const { emailOrUsername } = passresult.data

    if (!emailOrUsername) {
      return NextResponse.json(
        { error: 'Email or username is required' },
        { status: 400 }
      )
    }

    const user = await prisma.user.findFirst({
      where: { or: [
        { email: emailOrUsername.trim().toLowerCase() }, // Match by email
        { username: emailOrUsername.trim().toLowerCase() } // Match by username
      ] },
    })

    if (!user) {
      return NextResponse.json(
        { message: 'No user found with this email or username' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      message: 'Password reset link sent to email'
    })

  } catch (error) {
    console.error('FORGOT_PASSWORD_ERROR', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}