export const SQL_STATEMENTS = {
    insertTask: `
        INSERT INTO tasks (id, name, description, dueDate, createDate, status)
        VALUES (?, ?, ?, ?, ?, ?)`,
    selectAllTasks: `
        SELECT * FROM tasks
        ORDER BY dueDate
        `,
    updateTask: `
        UPDATE tasks
        SET name = ?, description = ?, dueDate = ?, status = ?
        WHERE id = ?`,
}