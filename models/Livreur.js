const mongoose = require('mongoose')

const LivreurSchema = new mongoose.Schema({
    nomcomplet: {
        type: String,
        required: true
    },
    nom: {
        type: String,
    },
    prenom: {
        type: String,
    },
    telephone : {
        type: String,
        required : true,
        unique : true
        
    },
    
    idnational : {
        type: String,
        unique : true
        
    },
    ville: {
        type : String,
        required : true
    },
    motdepasse : {
        type : String,
    },
    email :{
        type : String,
    },
    adresse : {
        type : String,
       
    },
    photo : {
        type : String,
    },
    imagenationnalrecto : {
        type: String,

    },
    imagenationnalverso  : {
        type : String ,
    },
    cv : {
        type : String ,

    },
    totalcolis : {
        type : String,
    },
    état : {
        type:Boolean

    }
    

}, {
    timestamps: true
})

const Livreur = mongoose.model('Livreurs', LivreurSchema)

module.exports = Livreur