const mongoose = require("mongoose");
require("dotenv").config({ path: "./env" });
const { connection } = require("./db/conn");
const express = require("express");
const app = express();
const cors = require("cors");
require("./.env");
const path = require("path");

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,UPDATE,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname, "uploads")));

app.use(express.json());
connection();

const router1 = require("./routes/UsersAuth");
const router2 = require("./routes/Fertilizers");
const router3 = require("./routes/FertilizerProviders");
const router4 = require("./routes/UploadFile");
app.use(router1);
app.use(router2);
app.use(router3);
app.use(router4);

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`server listening on port : ${port}`);
});
