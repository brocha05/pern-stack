const db = require("../db");

const getAllTasks = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM task')
        res.json({result: result.rows})
    } catch (error) {
        res.json({error: error.message})
    }
};

const getTask = async (req, res) => {
    
  res.send("Retrieving a single task");
};

const createTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const result = await db.query("INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *", [
    title,
    description,
    ]);
    res.json(result.rows[0]);
  } catch (error) {
    res.json({error: error.message})
  }
  
};

const deleteTask = async (req, res) => {
  res.send("Deleting tasks");
};

const updateTask = async (req, res) => {
  res.send("Updating a task");
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};
