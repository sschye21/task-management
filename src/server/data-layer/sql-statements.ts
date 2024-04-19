export const SQL_STATEMENTS = {
    insertTask: `
        INSERT INTO tasks (id, name, description, dueDate, createDate, status)
        VALUES ($1, $2, $3, $4, $5, $6)`,
    selectAllTasks: `
        SELECT * 
        FROM tasks`,
    searchTasks: `
        SELECT * 
        FROM tasks
        WHERE name LIKE $1 || '%'`,
    updateTask: `
        UPDATE tasks
        SET 
            name = COALESCE($1, name), 
            description = COALESCE($2, description), 
            dueDate = COALESCE($3, dueDate),
            status = COALESCE($4, status)
        WHERE id = $5`,
}