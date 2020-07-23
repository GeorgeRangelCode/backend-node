const express = require("express");
const app = express();

app.use("/", function (req, res) {
  res.send("hola");
});

app.listen(3000);
console.log("La aplicación esta escuchando en http://localhost:3000");
