-- Add your schema initialisation script here if you're on Postgres and not using an ORM
CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    dueDate DATE NOT NULL,
    createDate DATE NOT NULL,
    status VARCHAR(255) NOT NULL
);