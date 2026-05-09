const db = require("../db")

exports.getAll = async() => {
    const [livres] = await db.query("SELECT * FROM livres");
    return[livres]
}

exports.create = async(nom, prix, auteur, categorie, disponiblite) => {
    await db.query("INSERT INTO livres (nom, prix, auteur, categorie, disponiblite) VALUES (?, ?, ?, ?, ?)",
         [nom, prix, auteur, categorie, disponiblite]);
}

exports.modifier = async(id, nom, prix, auteur, categorie, disponiblite) => {
    await db.query("UPDATE livres SET nom = ?, prix = ?, auteur = ?, categorie = ?, disponiblite = ? WHERE id=?",
         [nom, prix, auteur, categorie, disponiblite])
}

exports.SupprimerLivres =  async(id, nom, prix, auteur, categorie, description) => {
    await db.query("DELETE livres SET nom =?, prix =?, auteur =?, categorie =?, description =? WHERE id=?",
         [nom, prix, auteur, categorie, description])
}