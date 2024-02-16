
const Support = require ('../models/Support')
const SupportRouter = require('express').Router()
const checkAuth = require('../middlewares/checkauth')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


SupportRouter.post('/registersupport', async (req, res) => {
    try {
        const {username,role,motdepasse} = req.body
        const hashPass = await bcrypt.hashSync(motdepasse, 10)
        const data = await Support.create({
           username,
            role,
            motdepasse: hashPass
            

        })
        res.json(data)
    } catch (err) {
        console.log(err)
        res.json({
            err: err?.message
        })
    }
})
SupportRouter.post('/loginsupport', async (req, res) => {
    try {
        const { username, motdepasse } = req.body
        const support = await Support.findOne({username})
        if(support) {
            const checkPas = await bcrypt.compareSync(motdepasse, support.motdepasse)
            if(checkPas) {
                const token = jwt.sign({username: support.username, id: support._id}, 'user', {expiresIn: '7d'})
                res.json({
                    token,
                    user: support

                })
            }
            else {
                res.json({msg: "Mot de passe incorrect"})
            }
        }
        else {
            res.json({msg: "Pas de support avec ce username ! "})
        }
    } catch (err) {
        console.log(err)
        res.json({
            msg: err?.message
        })
    }
})
SupportRouter.get('/profilesupport', checkAuth, async (req, res) => {
    try {
        const data = await Support.findById(req.user)
        res.json(data)
    } catch (err) {
        console.log(err)
        res.json({msg: err?.message})
    }
})


module.exports = SupportRouter







