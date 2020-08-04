const express = require("express");
const bodyParser = require("body-parser");

const db = require("./db");

const router = require("./network/routes");

db(
  "mongodb+srv://db_user_backend_node:db_user_backend_node@cluster0.ocf3j.mongodb.net/telegrom?retryWrites=true&w=majority"
);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

app.use("/app", express.static("public"));

app.listen(3000);
console.log("La aplicación esta escuchando en http://localhost:3000");
