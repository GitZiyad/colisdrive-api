const mongoose = require('mongoose')

const tarifsSchema = new mongoose.Schema(

    {
        lieuderammassage : {
            type : String
        },
        destination: {

            type : String ,

        },
        prix : {
            type : Number 
        }},{
            timestamps: true
        }
    

    
)
const Tarifs = mongoose.model('tarifs',tarifsSchema)

module.exports=Tarifs

