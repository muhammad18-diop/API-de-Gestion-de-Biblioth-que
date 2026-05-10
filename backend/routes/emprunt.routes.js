const emprunts = require("../controllers/emprunt.controllers")

const express = require("express");

const router = express.Router();

router.get("/emprunts", emprunts.getLivresEmprunt);
router.post("/emprunts", emprunts.emprunter);

module.exports = router;

