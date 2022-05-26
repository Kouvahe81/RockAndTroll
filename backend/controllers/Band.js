const  express = require("express")
const  router = express.Router()
const Band = require("../models/Band")
const multer = require('multer');

//define storage for the images

const storage = multer.diskStorage({
  //destination for files
  destination: function (request, file, callback) {
    callback(null, './public/uploads/images');
  },

  //add back the extension
  filename: function (request, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

//upload parameters for multer
const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 3,
  },
})


exports.createBand =  upload.single('image'), (request, response)=> {
    const bandObject = JSON.parse(request.body.band)
    let band = new Band({
        nameBand: request.body.nameBand,
        numberMember: request.body.numberMember,
        creationYear: request.body.creationYear,
        history: request.body.history,
        bandImage:request.body.bandImage
        //imageUrl: `${request.protocol}://${request.get('host')}/images/${request.files.filename}`
    })
    console.log("Données chargées"+ band)
    band.save()
        .then(()=>{
            console.log('la réponse est '+response)
            response.status(201).json({message: "Post saved succefully !"})
        })
        .catch((error)=>{
            response.status(400).json({error:error})
            })
    }

exports.modifyBand = (request,response)=>{
    const band = new Band({
        _id: request.params.id,
        nameBand: request.body.nameBand,
        numberMember: request.body.numberMember,
        creationYear: request.body.creationYear,
        history: request.body.history

    })
    Band.updateOne({_id:request.params.id}, band)
    .then(()=>{
        response.status(201).json({message:"Band is updated successfully !"})})
    .catch((error)=>{
        response.status(400).json({error:error})})
    }

exports.deleteBand = (request, response)=>{
    Band.deleteOne({_id:request.params.id})
        .then(()=>{
            response.status(200).json({message:"Deleted !"})
        })
    .catch((error)=>{
        response.status(400).json({error:error})})
    }


exports.getBand = (request,response)=>{
    Band.find({}, (err, items)=>{
        if(err){
            console.log(err)
            response.status(500).send("Une erreur s'est produite", err)
        }
        else{
            response.render('imagesPage',{items:items})
        }
    })
}