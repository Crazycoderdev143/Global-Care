import NextAuth from "next-auth";
import {prisma} from "@/lib/prisma";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/sign-in",
  },

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({profile, account}) {
      const email = profile?.email;
      if (!email) return false;

      const username = email.split("@")[0];
      const image =
        account.provider === "facebook"
          ? (profile?.picture?.data?.url ?? null)
          : (profile?.picture ?? null);

      const existingUser = await prisma.user.findUnique({where: {email}});

      if (!existingUser) {
        await prisma.user.create({
          data: {
            email,
            username,
            profileImg: image,
            isVerified: !!profile.email_verified,
            role: "USER",
          },
        });
      } else {
        const updates: any = {};
        if (existingUser.profileImg !== image) updates.profileImg = image;
        if (existingUser.username !== username) updates.username = username;

        if (Object.keys(updates).length > 0) {
          await prisma.user.update({
            where: {email},
            data: updates,
          });
        }
      }

      return true;
    },

    async jwt({token, user}) {
      if (user) {
        const dbUser = await prisma.user.findUnique({
          where: {email: user.email!},
        });
        if (dbUser) {
          token.id = dbUser.id;
          token.username = dbUser.username;
          token.role = dbUser.role;
          token.isVerified = dbUser.isVerified;
        }
      }
      return token;
    },

    async session({session, token}) {
      if (session.user && token) {
        session.user.id = token.id as string;
        session.user.username = token.username;
        session.user.role = token.role;
        session.user.isVerified = token.isVerified;
      }
      return session;
    },
  },
});


// performance optimization, efficiency, maintainability, readability security and short code
