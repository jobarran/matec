'use server';

import { auth } from '@/auth.config';
import prisma from '@/lib/prisma';

export const getAllMaterials = async () => {

    const session = await auth();

    if (session?.user.userType !== 'ADMIN') {
        return {
            ok: false,
            message: 'User must be logged in as ADMIN'
        };
    }

    try {

        const materials = await prisma.material.findMany({
            include: {
                materialName: {
                    select: {
                        name: true,
                        
                    }
                }
            }
        });
        if (materials.length === 0) {
            return {
                ok: true,
                labours: []
            };
        }

        return {
            ok: true,
            materials: materials
        };

    } catch (error) {
        console.error(error);
        return {
            ok: false,
            message: 'Error fetching labours'
        };
    }
};