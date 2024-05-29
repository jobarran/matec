'use server';

import { auth } from '@/auth.config';
import prisma from '@/lib/prisma';

export const getAllLabours = async () => {

    const session = await auth();

    if (session?.user.userType !== 'ADMIN') {
        return {
            ok: false,
            message: 'User must be logged in as ADMIN'
        };
    }

    try {

        const labours = await prisma.labour.findMany()

        if (labours.length === 0) {
            return {
                ok: true,
                labours: []
            };
        }

        return {
            ok: true,
            labours: labours
        };

    } catch (error) {
        console.error(error);
        return {
            ok: false,
            message: 'Error fetching labours'
        };
    }
};