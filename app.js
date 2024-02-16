const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/Clients', require('./routers/ClientRoutes'))
app.use('/Livreur',require('./routers/LivreurRoutes'))
app.use('/Colis', require('./routers/ColisRoutes'))
app.use('/Support',require('./routers/SupportRoutes'))




const connectdb = async () => {
    try {
        await mongoose.connect('mongodb+srv://ziyad:gomycode@cluster0.nn4owtb.mongodb.net/delivery?retryWrites=true&w=majority')
        console.log("Db Connected")
    } catch (err) {
        console.log(err)
    }
}

connectdb()


app.listen(4000, () => {
    console.log("Server Running")
})





