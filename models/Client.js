const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
    nomcomplet: {
        type: String,
        required: true
    },
    telephone : {
        type: String,
        required : true,
        unique : true
        
    },
    motdepasse : {
        type : String,
        required : true,
    },
    ville: {
        type : String,
        required : true
    },
    totalcolis :{
        type : Number,
        default : 0
    }
}, {
    timestamps: true
})

const Client = mongoose.model('Clients', ClientSchema)

module.exports = Client