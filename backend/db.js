const mysql = require("mysql2")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gestionnaire_bibliotheques"
})

db.connect((err) => {
    if(err){
        console.log("Erreur de connexion à  la base de donnée"); 
    }else{
        console.log("Connexion à la base de donnée réussie");
    }
})

module.exports = db;