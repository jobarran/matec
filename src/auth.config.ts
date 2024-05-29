import NextAuth, { type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import prisma from './lib/prisma';
import bcryptjs from 'bcryptjs'
 
export const authConfig: NextAuthConfig = {
    pages: {
        signIn: '/auth/login',
        newUser: 'auth/new-account',
    },

    callbacks: {

        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnWeb = nextUrl.pathname.startsWith('/user') || nextUrl.pathname.startsWith('/admin');
            if (isOnWeb) {
              if (isLoggedIn) return true;
              return false; // Redirect unauthenticated users to login page
            } 
            return true;
          },

        jwt({ token, user }) {

            if ( user ) {
                token.data = user
            }
            return token   
        },
        
        session({ session, token, user }) {
            session.user = token.data as any
            return session
        }
    },

    providers: [

        Credentials({
            async authorize(credentials) {
              const parsedCredentials = z
                .object({ email: z.string().email(), password: z.string().min(6) })
                .safeParse(credentials);

                if ( !parsedCredentials.success ) return null;

                const { email, password } = parsedCredentials.data

                // find user
                const user = await prisma.user.findUnique({ where: { email: email.toLocaleLowerCase() } })
                if ( !user ) return null;

                // compare password
                if ( !bcryptjs.compareSync( password, user.password )) return null;

                // return user without password
                const { password: _, ...rest } = user;
                return rest;

            },
          }),
          
    ]
};

export const { signIn, signOut, auth, handlers } = NextAuth( authConfig )

//TODO: REVALIDATE USER DATA METHOD