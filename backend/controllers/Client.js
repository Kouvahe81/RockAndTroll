const Client = require("../models/Client")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.createClient = (request, response)=>{
    bcrypt.hash(request.body.password,10)
        .then(hash=>{
            const client = new Client({
        email: request.body.email,
        fullName: request.body.fullName,
        userName: request.body.userName,
        birthDay: request.body.birthDay,
        confirmPassword: hash,
        password: hash
    })
            client.save()
                 .then(()=>{
                        response.status(201).json({message: "Post saved succefully !"})
                        console.log('Super')
                    })
                    .catch((error)=>{
                        response.status(400).json({error:error})
                        console.log('Zut')
                    })

    })
}


exports.showOneClient=(request, response)=>{
    Client.findOne({_id:request.params.id})
        .then((person)=>{
            response.status(200).json(person)})
        .catch((error)=>{
            response.status(404).json({error:error})})
    }

exports.searchEmail =(request, response)=>{
    console.log(request.params.email)
    Client.findOne({ email: request.params.email })
        .then((person)=>{
            response.status(200).json(person)})
        .catch((error)=>{
            response.status(404).json({error:error})})
    }


exports.modify=(request,response)=>{
    const client = new Client({
        _id: request.params.id,
        fullName: request.body.fullName,
        userName: request.body.userName,
        birthDay: request.body.birthDay,
        password: request.body.password,
        confirmPassword: request.body.confirmPassword,

    })
    Client.updateOne({_id:request.params.id}, client)
    .then(()=>{
        response.status(201).json({message:"Person updated successfully !"})})
    .catch((error)=>{
        response.status(400).json({error:error})})
    }

exports.delete =(request, response)=>{
    Client.deleteOne({_id:request.params.id})
        .then(()=>{
            response.status(200).json({message:"Deleted !"})
        })
    .catch((error)=>{
        response.status(400).json({error:error})})
    }

exports.showAllClient = (request,response)=>{
    Client.find()
        .then((client)=>{
            response.status(200).json(client)}
        )
        .catch((error)=>{
            response.status(400).json({error:error})
        })
}


exports.login = (request, response)=> {
    Client.findOne({email: request.body.email})
        .then(client => {
            console.log(client)
            if (!client) {
                return response.status(401).json({error: 'email ou mot de passe incorrect !'});
            }

    bcrypt.compare(request.body.password, client.password)
        .then(valid => {
            console.log('Connexion réussie')
          if (!valid) {
            return response.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          response.status(200).json({
            userId: client._id,
            token: jwt.sign(
              { userId: client._id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => response.status(500).json({ error }));
    })
    .catch(error => response.status(500).json({ error }));

}


