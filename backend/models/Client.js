const mongoose = require('mongoose')

// Déclaration du schéma de la structure de la table d'une personne

const templateClient= new mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    fullName:{
        type: String,
        required: true
    },
     userName:{
        type: String,
        required: true
    },
    birthDay:{
        type: Date,
        required: false
    },
    password:{
        type: String,
        required: true
    },
    confirmPassword:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Client', templateClient, 'Client')
