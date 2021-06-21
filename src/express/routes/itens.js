const express = require("express");
const router = express.Router();
const itens = require("../services/itens");

// GET
router.get("/", async function (req, res, next) {
  try {
    res.json(await itens.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Deu erro pegando os item `, err.message);
    next(err);
  }
});

//POST
router.post("/", async function (req, res, next) {
  try {
    res.json(await itens.create(req.body));
  } catch (err) {
    console.error(`Deu erro criando o item`, err.message);
    next(err);
  }
});

// PUT
router.put("/:id", async function (req, res, next) {
  try {
    res.json(await itens.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Deu erro editando o item`, err.message);
    next(err);
  }
});

// DELETE
router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await itens.remove(req.params.id));
  } catch (err) {
    console.error(`Deu erro deletando o item`, err.message);
    next(err);
  }
});

module.exports = router;
