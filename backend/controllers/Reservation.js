const  express = require("express")
const router = express.Router()
const reservation = require("../models/Reservation")


exports.createReservation = (request, response)=>{
    const reservation = new reservation({
        dateReservation: request.body.dateReservation,
        client: request.body.client,
        festivalDay: request.body.festivalDay,

    })
    reservation.save()
        .then(()=>{
            response.status(201).json({message: "Post saved succefully !"})
        })
        .catch((error)=>{
            response.status(400).json({error:error})
        })
}


exports.getOneReservation = (request, response)=>{
    reservation.findOne({_id:request.params.id})
        .then((festivalDay)=>{
            response.status(200).json(festivalDay)})
        .catch((error)=>{
            response.status(404).json({error:error})})
}

exports.modifyReservation = (request,response)=>{
    const reservation_ = new reservation({
        _id: request.params.id,
        ateReservation: request.body.dateReservation,
        client: request.body.client,
        festivalDay: request.body.festivalDay,
    })
    reservation.updateOne({_id:request.params.id}, reservation_)
    .then(()=>{
        response.status(201).json({message:"Person updated successfully !"})})
    .catch((error)=>{
        response.status(400).json({error:error})})
}

exports.deleteReservation = (request, response)=>{
    Client.deleteOne({_id:request.params.id})
        .then(()=>{
            response.status(200).json({message:"Deleted !"})
        })
    .catch((error)=>{
        response.status(400).json({error:error})})
}
