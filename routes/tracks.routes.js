const express = require("express");
const router = express.Router();
const { getItems, createItem } = require("../controllers/tracksController")

//TODO http://localhost/tracks GET, POST, DELETE, PUT

router.get("/", getItems);

router.post("/", createItem);


module.exports = router;