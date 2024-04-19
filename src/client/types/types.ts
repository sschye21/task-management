export type TaskCreateArgs = {
    name: string;
    description: string;
    dueDate: string;
    priority: string;
}

export type EditTaskArgs = {
    name?: string;
    description?: string;
    dueDate?: string;
    priority?: string;
    id: string
}