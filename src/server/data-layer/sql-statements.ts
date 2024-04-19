export const SQL_STATEMENTS = {
    insertTask: `
        INSERT INTO tasks (id, name, description, dueDate, createDate, status)
        VALUES ($1, $2, $3, $4, $5, $6)`,
    selectAllTasks: `
        SELECT * 
        FROM tasks
        WHERE name LIKE $1 || '%'`,
    updateTask: `
        UPDATE tasks
        SET 
            name = COALESCE(name, $1), 
            description = COALESCE(description,$2), 
            dueDate = COALESCE(dueDate, $3),
            status = COALESCE(status, $4)
        WHERE id = $5`,
}