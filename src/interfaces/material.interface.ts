import { TaskComponent, User } from ".";

export interface MaterialProvider {
    id: string;
    userId: string;
    materials: Material[];
    createdAt: Date;
    updatedAt: Date;
}

export interface MaterialName {
    id: string;
    name: string;
    materials: Material[];
    createdAt: Date;
    updatedAt: Date;
}

export interface Material {
    id: string;
    date: Date;
    price: number;
    components: TaskComponent[];
    materialNameId: string;
    providerId: string;
    createdAt: Date;
    updatedAt: Date;
}

