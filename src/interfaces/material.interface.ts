import { LabourMaterialRelation, TaskComponent, User } from ".";

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
    unit: string;
    quantity: number;
    price: number;
    materialNameId: string;
    providerId: string;
    labourMaterialRelations?: LabourMaterialRelation[];
    createdAt: Date;
    updatedAt: Date;
}