import Database from "better-sqlite3"

let db: Database.Database

export function getDatabase() {
    if (!db) {
        db = new Database(":memory:")

        db.exec(`
            CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            completed BOOLEAN DEFAULT FALSE,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `)

        const insert = db.prepare(`
            INSERT OR IGNORE INTO tasks (title, description, completed) 
            VALUES (?, ?, ?)
        `)

        insert.run("Foo", "Foo", 0)
        insert.run("Bar", "Bar", 1)
        insert.run("Baz", "Baz", 0)
    }

    return db
}

export interface Task {
    id: number
    title: string
    description: string | null
    completed: boolean
    created_at: string
    updated_at: string
}
