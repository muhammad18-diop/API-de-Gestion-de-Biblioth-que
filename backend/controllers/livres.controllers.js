const livres = require("../model/livres.model");

exports.getLivres = async (req, res) => {
    const livres = await livres.getAll();
    res.json(livres  );
}

exports.ajouterLivres = async (req, res) => {
    const {nom, prix, auteur, categorie, disponiblite} = req.body;
    await livres.create(nom, prix, auteur, categorie, disponiblite);
    res.json({message: "Livres ajouter"})
} 

exports.ModifierLivres = async(req, res) => {
    const {id} = req.params;
    const{nom, prix, auteur, categorie, disponiblite} = req.body;
    await livres.modifier(id, nom, prix, auteur, categorie, disponiblite);
    res.json({message: "Livres Modifier"})
}

exports.SupprimerLivres = async(req, res) => {
    const {id} = res.params;
    const {nom, prix, auteur, categorie, disponiblite} = req.body;

    await livres.SupprimerLivres(id, nom, prix, auteur, categorie, disponiblite)
}