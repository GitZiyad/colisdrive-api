const Tarifs = require('../models/Tarifs')
const TarifsRouter = require('express').Router()
const checkAuth = require('../middlewares/checkauth')
const jwt = require('jsonwebtoken')

TarifsRouter.get('/gettarifs',checkAuth,async(req,res)=>{
    try {
    const data = await Tarifs.find()
    res.json(data)
} catch (error) {
        console.log(error)
}}
)

TarifsRouter.post('/addtarifs',checkAuth ,async (req,res)=>
{
    try {
    const data = await Tarifs.create(req.body)
    res.json(data)
} catch (error) {
    console.log(error)
        
}
})
TarifsRouter.put('/updatetarifs/:id', checkAuth,async (req, res) => {
    try {
        const data = await Tarifs.findByIdAndUpdate(req.params.id, req.body)
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})

TarifsRouter.delete('/deletecolis/:id', checkAuth,async(req,res)=>{
    try {
        await Colis.findByIdAndDelete(req.params.id)
        res.json('Tarif supprimé')

    } catch (error) {
        console.log(error)
    }
})
module.exports = TarifsRouter


