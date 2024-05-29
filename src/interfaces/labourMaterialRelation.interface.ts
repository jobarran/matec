import { Labour } from "./labour.interface";
import { Material } from "./material.interface";

export interface LabourMaterialRelation {
    id: string;
    labourId: string;
    labour: Labour;
    materialId: string;
    material: Material;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
}