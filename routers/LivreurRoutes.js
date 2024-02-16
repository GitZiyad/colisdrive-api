const Livreur = require('../models/Livreur')
const LivreurRouter = require('express').Router()
const checkAuth = require('../middlewares/checkauth')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')



LivreurRouter.post('/preregisterlivreur', async (req, res) => {
    try {
        const { nomcomplet, telephone, ville } = req.body
      
        const data = await Livreur.create({
            nomcomplet,
            telephone,
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

LivreurRouter.post('/registerlivreur', async (req, res) => {
    try {
        const {prenom,nom,idnational,email,adresse, motdepasse,photo,imagenationnalrecto,imagenationnalverso,cv,totalcolis} = req.body
        const hashPass = await bcrypt.hashSync(motdepasse, 10)
        const data = await Livreur.create({
            prenom,nom,idnational,email,adresse, motdepasse: hashPass,photo,imagenationnalrecto,imagenationnalverso,cv,totalcolis

        })
        res.json(data)
    } catch (err) {
        console.log(err)
        res.json({
            err: err?.message
        })
    }
})

LivreurRouter.post('/loginlivreur', async (req, res) => {
    try {
        const { telephone, motdepasse } = req.body
        const livreur = await Client.findOne({telephone})
        if(livreur) {
            const checkPas = await bcrypt.compareSync(motdepasse, livreur.motdepasse)
            if(checkPas) {
                const token = jwt.sign({telephone: livreur.telephone, id: livreur._id}, 'user', {expiresIn: '7d'})
                res.json({
                    token,
                    user: livreur

                })
            }
            else {
                res.json({msg: "Mot de passe incorrect"})
            }
        }
        else {
            res.json({msg: "Pas de livreur avec ce numero de telephone"})
        }
    } catch (err) {
        console.log(err)
        res.json({
            msg: err?.message
        })
    }
})

LivreurRouter.get('/profilelivreur', checkAuth, async (req, res) => {
    try {
        const data = await Livreur.findById(req.user)
        res.json(data)
    } catch (err) {
        console.log(err)
        res.json({msg: err?.message})
    }
})






module.exports= LivreurRouter




