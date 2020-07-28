const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const response = require("./network/response");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get("/message", function (req, res) {
  console.log("req.headers", req.headers);
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });
  // res.send("Lista de mensajes");
  response.success(req, res, "Lista de mensajes");
});

router.post("/message", function (req, res) {
  console.log("req", req.query);
  console.log("req", req.body);
  if (req.query.error == "ok") {
    response.success(req, res, "Error simulado", 400);
  } else {
    response.success(req, res, "Creado correctamente", 201);
  }
});

app.use("/app", express.static("public"));

app.listen(3000);
console.log("La aplicación esta escuchando en http://localhost:3000");
