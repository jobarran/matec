'use server';

import { auth } from '@/auth.config';
import prisma from '@/lib/prisma';

export const getAllLabourProviders = async () => {

    const session = await auth();

    if (session?.user.userType !== 'ADMIN') {
        return {
            ok: false,
            message: 'User must be logged in as ADMIN'
        };
    }

    try {

        const labourProviders = await prisma.labourProvider.findMany({
            include: {
                user: {
                    select: {
                        name: true,
                        lastName: true
                    }
                },
                labours: {
                    include: {
                        labourName: {
                            select: {
                                labourCategory: {
                                    select: {
                                        name: true
                                    }
                                },
                                name: true,
                                unit: true
                            }
                        }
                    }
                }
            }
        });
    
    if (labourProviders.length === 0) {
        return {
            ok: true,
            labourProviders: []
        };
    }

    return {
        ok: true,
        labourProviders: labourProviders
    };

} catch (error) {
    console.error(error);
    return {
        ok: false,
        message: 'Error fetching labours'
    };
}
};