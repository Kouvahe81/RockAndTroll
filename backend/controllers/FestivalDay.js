const  express = require("express")
const router = express.Router()
const FestivalDay = require("../models/FestivalDay")


exports.createFestivalDay = (request, response)=>{
    const dayFestival = new FestivalDay({
        dateFestival: request.body.dateFestival,
        numberScene: request.body.numberScene,
        price:request.body.price,
        BandSchema:request.body.Band
    })
    console.log(dayFestival)
    dayFestival.save()
        .then(()=>{
            response.status(201).json({message: "Post saved succefully !"})
        })
        .catch((error)=>{
            response.status(400).json({error:error})
        })
}


exports.getOneFestivalDay = (request, response)=>{
    FestivalDay.findOne({_id:request.params.id})
        .then((festivalDay)=>{
            response.status(200).json(festivalDay)})
        .catch((error)=>{
            response.status(404).json({error:error})})
}


exports.modifyFestivalDay = (request, response)=>{
    const festivalDay = new FestivalDay({
        _id: request.params.id,
        dateFestival: request.body.dateFestival,
        numberScene: request.body.numberScene,
        BandSchema:request.body.Band
    })
    FestivalDay.updateOne({_id:request.params.id}, festivalDay)
    .then(()=>{
        response.status(201).json({message:"Person updated successfully !"})})
    .catch((error)=>{
        response.status(400).json({error:error})})
}

exports.deleteFestivalDay = (request, response)=>{
    FestivalDay.deleteOne({_id:request.params.id})
        .then(()=>{
            response.status(200).json({message:"Deleted !"})
        })
    .catch((error)=>{
        response.status(400).json({error:error})})
}


exports.getAllFestivalDay =  (request, response)=>{
    FestivalDay.find()
        .then((festivalDay)=>{
            response.status(200).json(festivalDay)})
        .catch((error)=>{
            response.status(400).json({error:error})
        })
}
