import pg from 'pg'
const { Pool } = pg

// Connection information
const pool = new Pool({
    user: "stevenchye",
    host: 'checkbox-postgres',
    database: "db",
    password: "123456",
});

export default pool;