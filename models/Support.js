const mongoose = require('mongoose')

const SupportSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique : true
    },
    role : {
        type: String,
        unique : true
        
    },
    motdepasse : {
        type : String,
        required : true,
    }
    
}, {
    timestamps: true
})

const Support = mongoose.model('Supports', SupportSchema)

module.exports = Support