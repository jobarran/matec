'use server'

import { UserType } from "@/interfaces";
import prisma from "@/lib/prisma"
import bcryptjs from 'bcryptjs';

interface Props {
    name: string,
    lastName: string,
    email: string,
    password: string,
    userType?: UserType,
}

export const registerUser = async ({ name, lastName, email, password, userType }: Props) => {


    try {
        const userData: any = {
            name: name,
            lastName: lastName,
            email: email.toLowerCase(),
            password: bcryptjs.hashSync(password),
            userType: userType ? userType : 'REGULAR',
        };

        const user = await prisma.user.create({
            data: userData,
            select: {
                id: true,
                name: true,
                lastName: true,
                email: true,
                userType: true,
            }
        });

        return {
            ok: true,
            user: user,
            message: 'User created'
        }

    } catch (error) {
        console.log(error)
        return {
            ok: false,
            message: 'Cannot create user'
        }
    }

}