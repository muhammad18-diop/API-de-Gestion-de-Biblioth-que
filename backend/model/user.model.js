const db = require("../db");

exports.findByEmail = async (email) => {
    const [users] = await db.query("SELECT * FROM utilisateurs WHERE email = ?", [email]);
    return users[0];
}

exports.create = async (nom, email, password) => {
    await db.query("INSERT INTO utilisateurs (nom, email, password) VALUES (?, ?, ?)", [nom, email, password]);
}