const mongoose = require('mongoose')

const templateFestivalDay = new mongoose.Schema({
    dateFestival:{
        type: Date,
        type: String,
        required: true
    },
    numberScene:{
        type: Number,
        required: true
    },
    price:{
        type:Number,
        required:true
    },
    Bands:[{type: mongoose.Schema.Types.ObjectId, ref:"Band"}],
    ScenesRasta:[{type: mongoose.Schema.Types.ObjectId, ref:"Band"}],
    ScenesRock: [{type: mongoose.Schema.Types.ObjectId, ref:"Band"}],
    SceneTrolls:[{type: mongoose.Schema.Types.ObjectId, ref:"Band"}]
})

module.exports = mongoose.model('FestivalDay', templateFestivalDay, 'FestivalDay')