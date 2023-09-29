import express from "express";
import { config as dotenvConfig } from "dotenv";
import { connectToMongo } from "./db.js";
const app = express();
import cors from "cors";
import registerUsers from "./Auth/Register.js";
import LoginUsers from "./Auth/login.js";

dotenvConfig();
// conncted to db
const db = connectToMongo();

const port = 6969;
app.use(express.json());
app.use(
  cors({
    // origin: [process.env.CLIENT_URL_1, process.env.CLIENT_URL_2],
    origin: [process.env.CLIENT_URL],
    methods: ["GET", "POST", "UPDATE", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json({ massage: "Welcome to the TODO LIST Api Server!!" });
});
app.post("/Register", registerUsers);
app.post("/Login", LoginUsers);
// app.post("/CreateTODO", CreateTODO);

app.listen(port, () => {
  console.log(`TODO LIST app listening on port http://localhost:${port}`);
});
