const User = require('../models/User');
const bcrypt = require('bcrypt')

async function registerUser(req, res) {
    try {

        const { password, name, email } = req.body

        const hashedpassword = await bcrypt.hash(password, 10);

        await User.create({
            password: hashedpassword,
            name,
            email

        });

        res.status(201).json({ message: "Usuario criado com suceso" });

    } catch (error) {
        console.log(error);
        res.status(500).send("Não foi possivel criar o  Usuario!")

    }

}
async function login(req, res) {

    try {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: { email }
        })
        if (!user) return res.status(404).send("user nao encontrado");

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(401).send("Senha incorreta!")
        
        res.status(200).json({
            message:"login bem sucessido ",
            user:{id: user.id, name: user.name, email: user.email}
        })

    } catch (error) {
        console.log(error)
    }   


}



module.exports = {
    registerUser,
    login
}