const emprunt = require("../model/emprunt.model");

exports.getLivresEmprunt = async(req, res) => {
    const Mesemprunts = emprunt.Getemprunt;
    res.json(Mesemprunts)
}

exports.emprunter = async(req, res) => {
    const {nom, auteur, datePret, dateRetour} = req.body;
    await emprunt.createEmprunt(nom, auteur, datePret, dateRetour);
    res.json({message: "Votre emprunt est accepter"})
}