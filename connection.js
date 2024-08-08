require("dotenv").config();
const mongoose = require("mongoose");

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

const db = mongoose.connection;

mongoose.connect(url).catch((err) => console.log(err));

db.once("open", (_) => {
  console.log("Database is connection to", url);
});

db.on("error", (err) => {
  console.log(err);
});
