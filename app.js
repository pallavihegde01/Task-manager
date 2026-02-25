const express = require("express");
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require("./db/connection");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/errorHandler");

app.use(express.static('./public'))
app.use(express.json());
require('dotenv').config()

app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandler);

port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server running at ${port}.`));
  } catch (error) {
    console.log(error);
  }
};

start();
