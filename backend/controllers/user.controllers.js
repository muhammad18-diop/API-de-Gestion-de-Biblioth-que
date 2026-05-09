const bcrypt = require ("bcrypt");
const User = require("../model/user.model")

exports.inscription = async (req, res) => {
    try {
        const {nom, email, password} = req.body;

        if(!nom || !email || !password){
            return res.status(400).json ({message: "Champs obligatoire"})
        }

        const userExist = await User.findByEmail(email);
        if(userExist){
            return res.status(400).json({message: "Ce email est déja utiliser"})
        }

        const cacherMdp = await bcrypt.hash(password, 10);

        await User.create(nom, email, cacherMdp);
        res.status(201).json({message: "Utilisateur creer"});
    } catch (error) {
        res.status(201).json({message: "Erreur server", error})
    }
}