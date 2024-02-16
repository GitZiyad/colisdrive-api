const checkAuth = require('../middlewares/checkauth')
const Colis = require('../models/Colis')
const ColisRouter= require('express').Router()

ColisRouter.get('/getcolis',checkAuth,async(req,res)=>{
    try {
    const data = await Colis.find()
    res.json(data)
} catch (error) {
        console.log(error)
}
})

ColisRouter.get('/getcolis/:id', checkAuth,async (req, res) => {
    try {
        const data = await Colis.findById(req.params.id)
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})

ColisRouter.post('/addcolis',checkAuth ,async (req,res)=>
{
    try {
    const data = await Colis.create(req.body)
    res.json(data)
} catch (error) {
    console.log(error)
        
}
})


ColisRouter.post('/acceptcolis',checkAuth ,async (req,res)=>
{
    try {
        const {statut ,etat} = req.body
    const data = await Colis.create(
       {
        statut,etat
       }
    )
    res.json(data)
} catch (error) {
    console.log(error)
        
}
})
ColisRouter.delete('/deletecolis/:id', checkAuth,async(req,res)=>{
    try {
        await Colis.findByIdAndDelete(req.params.id)
        res.json('La demande de livrason de colis a été supprimé ')

    } catch (error) {
        console.log(error)
    }
})
ColisRouter.put('/updatecolis/:id', checkAuth,async (req, res) => {
    try {
        const data = await Colis.findByIdAndUpdate(req.params.id, req.body)
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})


module.exports = ColisRouter

