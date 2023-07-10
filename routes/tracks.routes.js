const express = require("express");
const router = express.Router();
const { getItems, createItem, getItem, updateItem, deleteItem } = require("../controllers/trackController");
const { validatorCreateItem, validatorGetItem, validatorUpdateItem } = require("../validators/track");

// Ruta para obtener todos los elementos
router.get("/", getItems);

// Ruta para obtener un elemento específico
router.get("/:id", validatorGetItem, getItem);

// Ruta para crear un nuevo elemento
router.post("/", validatorCreateItem, createItem);

// Ruta para actualizar un elemento existente
router.put("/:id", validatorUpdateItem, updateItem);

// Ruta para eliminar un elemento existente
router.delete("/:id", deleteItem);

module.exports = router;
