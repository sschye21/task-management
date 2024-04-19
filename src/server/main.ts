import express from 'express';
import ViteExpress from 'vite-express';
import pool from './data-layer/db.js';
import { v4 as uuidv4 } from 'uuid';
import { SQL_STATEMENTS } from './data-layer/sql-statements.js';

const app = express();
app.use(express.json());

const randomId = () => uuidv4();

// Creates a New Task
app.post("/new/v1", async (req, res) => {
  const { name, description, dueDate, priority } = req.body;
  const id = randomId();
  
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero for single-digit months
  const day = String(date.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  
  await pool.query(
    SQL_STATEMENTS.insertTask, 
    [id, name, description, dueDate, formattedDate, priority])
    .catch(() => res.status(404).send("Error"))
    .then(() => {
      res.status(200).send("Success")});
})

// Get all tasks + limit + search
app.get("/tasks/v1", async (req, res) => {
  const { search } = req.query;

  const result = await pool.query(
    SQL_STATEMENTS.selectAllTasks,
    [search]
  );
  res.status(200).send(result.rows);
})

// Edit a single task
app.patch("/tasks/v1/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, dueDate, priority } = req.body;
  await pool.query(
    SQL_STATEMENTS.updateTask,
    [name, description, dueDate, priority, id])
    .catch(() => res.status(404).send("Error"))
    .then(() => res.status(200).send("Success"));;
})

ViteExpress.config({
  // Copy and paste of vite.config.ts just so vite-express does not need to import
  // vite, a devDependency, in runtime
  inlineViteConfig: {
    build: {
      outDir: './dist/client',
    },
  },
});

ViteExpress.listen(app, 3000, () =>
  console.log(`Server is listening on port 3000...`)
);
