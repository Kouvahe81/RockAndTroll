import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import {Form, FormGroup, Button, Input, Label} from "reactstrap";
import '../styles/Inscription.css'

import error from "../components/Error";



// Page de création d'un utilisateur

class ConnexionUser extends  Component{
  constructor(props) {
    super(props)
    this.state ={
      email: '',
      password:''
    }
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)

    this.onSubmit= this.onSubmit.bind(this)
  }
  changeEmail(event){
    this.setState({
      email:event.target.value
    })
  }

  changePassword(event){
    this.setState({
      password:event.target.value
    })
  }
  onSubmit(event) {
      event.preventDefault()
      const registered = {
          email: this.state.email,
          password: this.state.password,
      }
      axios.post(  'http://localhost:4000/login',registered)
          .then(response =>{
              if (response.status === 200){
                  alert('Connexion réussie' )}
          })
      .catch((error)=>{
            alert('Echec de la connexion' +
                'veuillez verifier votre email ou mot de passe')
        })



      //console.log('reponse '+ rep)
      this.setState({
                        email : '',
                        password : ''
                    })
  }
  render() {
    return(
        <div className="form-connexion">
          <div className='container'>
            <div className='form-div'>
              <Form onSubmit={this.onSubmit}>
                  <Label>e-mail</Label>
                  <Input type='text'
                       placeholder='E-mail'
                         id='email'
                       onChange={this.changeEmail}
                       value={this.state.email}
                       required
                  />
                    <Label> Mot de passe</Label>
                    <Input type='password'
                       placeholder='password'
                           id='password'
                       onChange={this.changePassword}
                       value={this.state.password}
                       className='form-control from-group'
                />
                    <div className="confirmer">
                        <button className='btn btn-primary' type="submit" id='sub' name='sub'>Connexion </button>
                    </div>
              </Form>
            </div>
          </div>
        </div>
    )
  }
}

export  default  ConnexionUser