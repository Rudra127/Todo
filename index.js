import express from "express";
import { config as dotenvConfig } from "dotenv";
import { connectToMongo } from "./db.js";
const app = express();
import cors from "cors";
import registerUsers from "./Auth/Register.js";
import LoginUsers from "./Auth/login.js";
import todoDelete from "./TODOs/DeleteTODO.js";
import todoUpdate from "./TODOs/updateTodo.js";
import todoDetails from "./TODOs/createTodo.js";
import getTodoById from "./TODOs/getTodoById.js";
import getTodo from "./TODOs/getTodo.js";

dotenvConfig();
// conncted to db
const db = connectToMongo();

const port = 6969;
app.use(express.json());
app.use(
  cors({
    // origin: [process.env.CLIENT_URL_1, process.env.CLIENT_URL_2],
    origin: [process.env.CLIENT_URL],
    methods: ["GET", "POST", "UPDATE", "DELETE", "PUT", "PATCH"],
    credentials: true,
  })
);

//testing
app.get("/", (req, res) => {
  res.json({ massage: "Welcome to the TODO LIST Api Server!!" });
});

//USER Endpoints
app.post("/Register", registerUsers);
app.post("/Login", LoginUsers);

//TODO Endpoints
app.post("/CreateTODO", todoDetails);

app.post("/deleteTodo", todoDelete);

app.post("/updateTodo", todoUpdate);

//get TODO.
app.get("/getTodos", getTodo);

//get TODO by id Endpoints.
app.get("/getTodoById", getTodoById);

app.listen(port, () => {
  console.log(`TODO LIST app listening on port http://localhost:${port}`);
});
