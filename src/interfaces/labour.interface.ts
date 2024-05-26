import { TaskComponent, User } from ".";

export interface LabourProvider {
    id: string;
    userId: string;
    labours: Labour[];
    createdAt: Date;
    updatedAt: Date;
}

export interface Labour {
    id: string;
    name: string;
    date: Date;
    price: number;
    efficiency?: number;
    components: TaskComponent[];
    labourProviderId: string;
    createdAt: Date;
    updatedAt: Date;
}