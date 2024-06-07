// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

// Middleware
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://admin:admin@backenddb.bfffrxz.mongodb.net/AMITdb?retryWrites=true&w=majority&appName=BackendDb"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const taskRoutes = require("./Pages/tasks");
const { ClientRequest } = require("http");
const { Console } = require("console");

app.use("/api/tasks", taskRoutes);
