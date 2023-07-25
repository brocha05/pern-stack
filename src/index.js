const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const taskRoutes = require('./routes/tasks.routes')
const db = require('./db')

const app = express();

app.use(express.json())
app.use(cors());
app.use(morgan("dev"));
app.use(taskRoutes)

app.listen(8080, () => console.log("Server listen on port 8080"));
