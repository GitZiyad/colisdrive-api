const Client = require('../models/Client')
const ClientRouter = require('express').Router()
const checkAuth = require('../middlewares/checkauth')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')





ClientRouter.post('/registerclient', async (req, res) => {
    try {
        const {ville , nomcomplet, telephone, motdepasse } = req.body
        const hashPass = await bcrypt.hashSync(motdepasse, 10)
        const data = await Client.create({
            nomcomplet,
            telephone,
            motdepasse: hashPass,
            ville 

        })
        res.json(data)
    } catch (err) {
        console.log(err)
        res.json({
            err: err?.message
        })
    }
})
ClientRouter.post('/loginclient', async (req, res) => {
    try {
        const { telephone, motdepasse } = req.body
        const client = await Client.findOne({telephone})
        if(client) {
            const checkPas = await bcrypt.compareSync(motdepasse, client.motdepasse)
            if(checkPas) {
                const token = jwt.sign({telephone: client.telephone, id: client._id}, 'user', {expiresIn: '7d'})
                res.json({
                    token,
                    user: client

                })
            }
            else {
                res.json({msg: "Mot de passe incorrect"})
            }
        }
        else {
            res.json({msg: "Pas de client avec Ce numero de telephone"})
        }
    } catch (err) {
        console.log(err)
        res.json({
            msg: err?.message
        })
    }
})




module.exports = ClientRouter







