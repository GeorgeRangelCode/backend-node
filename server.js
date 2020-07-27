const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get("/", function (req, res) {
  res.send("Lista de mensajes");
});

router.delete("/message", function (req, res) {
  console.log("req", req.query);
  console.log("req", req.body);

  res.send("Mensaje " + req.body.text + " añadido");
});

app.listen(3000);
console.log("La aplicación esta escuchando en http://localhost:3000");
