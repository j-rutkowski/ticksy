import { TaskType } from "./TaskType";

export type ListType = {
    name: string;
    icon: string;
    color: string;
    tasks: TaskType[];
    isPinned: boolean;
}