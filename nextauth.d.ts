import NextAuth, { DefaultSession } from "next-auth";



declare module 'next-auth' {
    interface Session {
        user: {
            id:string;
            name:string;
            lastName:string;
            email:string;
            userType:string;
            image?:string;
        } & DefaultSession['user']
    }
}