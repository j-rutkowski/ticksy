import { Task } from "./TaskType";

export type List = {
    name: string;
    icon: string;
    color: string;
    tasks: Task[];
}