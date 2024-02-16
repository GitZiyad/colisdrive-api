const mongoose = require('mongoose')

const colisSchema = new mongoose.Schema({

    depart : {
        type: String ,
        required : true
    },
    destination : {
        type : String ,
        required : true, 
    },
    
    nomdedestinataire : {
        type : String ,
        required : true, 
    },
    telephonededestinataire : {
        type : String ,
        required : true, 
    },
    tempsdedepart : {
        type : Date,
      
    },
    tempsdarriver : {
        type : Date ,
      
    },
    envoyerpar: {
        type: mongoose.Schema.Types.ObjectId ,
        ref : 'Clients'
    },
    livrerpar :{
        type: mongoose.Schema.Types.ObjectId ,
        ref :'Livreurs'

    }
    ,
    statut : {
      type : Boolean,
      default : false
     
    },
    etat : {
        type : String,
        default : 'Non accepté',
    }},{
        timestamps: true
    }


)
const Colis = mongoose.model('Colis', colisSchema)

module.exports = Colis
