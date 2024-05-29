import { LabourMaterialRelation } from ".";

export interface LabourProvider {
    id: string;
    userId: string;
    labours: Labour[];
    createdAt: Date;
    updatedAt: Date;
}

export interface LabourCategory {
    id: string;
    name: string;
    labourNames: LabourName[];
    createdAt: Date;
    updatedAt: Date;
}

export interface LabourName {
    id: string;
    name: string;
    unit: string;
    labourCategoryId: string;
    labours: Labour[];
    createdAt: Date;
    updatedAt: Date;
}

export interface Labour {
    id: string;
    date: Date;
    price: number;
    efficiency?: number;
    labourProviderId: string;
    labourNameId: string;
    labourMaterialRelations?: LabourMaterialRelation[];
    createdAt: Date;
    updatedAt: Date;
}