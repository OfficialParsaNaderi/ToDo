"use server"

import { getDatabase, type Task } from "./database";
import { revalidatePath } from "next/cache";

export async function HandleGetTasks(): Promise<Task[]> {
    const db = getDatabase();
    const tasks = db.prepare(`SELECT * FROM tasks ORDER BY created_at DESC`).all() as Task[];

    return tasks;
};

export async function HandleAddTask(formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    if (!title.trim()) {
        throw new Error("Title is required");
    };

    const db = getDatabase();
    const statement = db.prepare(`INSERT INTO tasks (title, description) VALUES (?,?)`);

    statement.run(title.trim(), description.trim() || null);
    revalidatePath("/");
};

export async function HandleUpdateTask(id: number, formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    if (!title.trim()) {
        throw new Error("Title is required");
    };

    const db = getDatabase()
    const statement = db.prepare(`
        UPDATE tasks 
        SET title = ?, description = ?, updated_at = CURRENT_TIMESTAMP 
        WHERE id = ?
    `);

    statement.run(title.trim(), description.trim() || null, id);
    revalidatePath("/");
};

export async function HandleToggleTaskComplete(id: number) {
    const db = getDatabase()
    const statement = db.prepare(`
        UPDATE tasks 
        SET completed = NOT completed, updated_at = CURRENT_TIMESTAMP 
        WHERE id = ?
    `);

    statement.run(id);
    revalidatePath("/");
};

export async function HandleDeleteTask(id: number) {
    const db = getDatabase();
    const statement = db.prepare(`DELETE FROM tasks WHERE id = ?`);

    statement.run(id);
    revalidatePath("/");
};