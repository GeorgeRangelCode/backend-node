const express = require("express");
const router = express.Router();
const response = require("../../network/response");

router.get("/", function (req, res) {
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });
  response.success(req, res, "Lista de mensajes");
});

router.post("/", function (req, res) {
  if (req.query.error == "ok") {
    response.success(
      req,
      res,
      "Error simulado",
      500,
      "Es solo una simulacion de los errores"
    );
  } else {
    response.success(req, res, "Creado correctamente", 201);
  }
});

module.exports = router;
