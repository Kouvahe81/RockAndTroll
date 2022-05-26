const mongoose = require("mongoose")
const Client = require('../models/Client')
const FestivalDay = require('../models/FestivalDay')

const templateReservation = new mongoose.Schema({
dateResevation:{
        type: Date,
        required: true
    },
    clients:[{type:mongoose.Schema.Types.ObjectId, ref:'Client'}],
    festivalDays:[{type: mongoose.Schema.Types.ObjectId, ref:'FestivalDay'}],
})

module.exports = mongoose.model('Reservation', templateReservation, 'Reservation')
