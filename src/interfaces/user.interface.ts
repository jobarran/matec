import { LabourProvider, MaterialProvider } from ".";

export interface User {
    id: string;
    email: string;
    name: string;
    lastName: string;
    // password: string;
    image?: string;
    userType: UserType;

    labourProvider?: LabourProvider;
    materialProvider?: MaterialProvider;

    // createdAt: Date;
    // updatedAt: Date;
}

export type UserType = 'REGULAR' | 'ADMIN'
