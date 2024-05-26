import { Labour, Material } from ".";

export enum ComponentType {
    LABOUR = 'LABOUR',
    MATERIAL = 'MATERIAL'
}
export interface TaskCategory {
    id: string;
    name: string;
    taskName?: TaskName;
    createdAt: Date;
    updatedAt: Date;
}

export interface TaskName {
    id: string;
    name: string;
    tasks: Task[];
    taskCategoryId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Task {
    id: string;
    taskNameId: string;
    components: TaskComponent[];
    createdAt: Date;
    updatedAt: Date;
}

export interface TaskComponent {
    id: string;
    componentType: ComponentType;
    materialId?: string;
    labourId?: string;
    taskId: string;
    createdAt: Date;
    updatedAt: Date;
}
