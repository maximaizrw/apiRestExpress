const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { createItem } = require("../controllers/storageController");


//TODO http://localhost:3000/api/storage



router.post("/", uploadMiddleware.single("myfile"), createItem);

module.exports = router;