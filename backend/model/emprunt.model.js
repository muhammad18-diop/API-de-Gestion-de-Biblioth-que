const db = require("../db")

exports.Getemprunt = async() => {
    const voirEmprunt = await db.query("SELECT * FROM pretes");
    return [voirEmprunt]
}

exports.createEmprunt = async (nom, auteur, dateEmprunt, dateReturn) => {

    await db.query("INSERT INTO prete (nom, auteur, dateEmprunt, dateReturn)  VALUES(?, ?, ?, ?)",
        [nom, auteur, dateEmprunt, dateReturn]
    )
}