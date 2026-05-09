const express = require("express");
const router = express.Router();

const livresControllers = require("../controllers/livres.controllers");

router.get("/livres", livresControllers.getLivres);
router.post("/livres", livresControllers.ajouterLivres);
router.put("/livres/:id", livresControllers.ModifierLivres);
router.delete("/delete/:id", livresControllers.SupprimerLivres)

module.exports = router;