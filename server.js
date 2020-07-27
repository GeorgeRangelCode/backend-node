const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get("/message", function (req, res) {
  console.log("req.headers", req.headers);
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });
  res.send("Lista de mensajes");
});

router.delete("/message", function (req, res) {
  console.log("req", req.query);
  console.log("req", req.body);

  res.send("Mensaje " + req.body.text + " añadido");
});

app.listen(3000);
console.log("La aplicación esta escuchando en http://localhost:3000");
