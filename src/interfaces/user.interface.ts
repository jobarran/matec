import { LabourProvider, MaterialProvider } from ".";

export enum UserType {
    REGULAR = 'REGULAR',
    ADMIN = 'ADMIN'
}

export interface User {
    id: string;
    email: string;
    name: string;
    lastName: string;
    password: string;
    image?: string;
    userType: UserType;

    labourProvider?: LabourProvider;
    materialProvider?: MaterialProvider;

    createdAt: Date;
    updatedAt: Date;
}