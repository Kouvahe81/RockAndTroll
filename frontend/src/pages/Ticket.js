import React, {Component, useRef, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import {Form, FormGroup, Button, Input} from "reactstrap";

function Ticket(){
  const [countDay1, setCount1] = useState(0)
  const [countDay2, setCount2] = useState(0)
  const toto = useRef(countDay1)
  return(
    <div>
      <p>Achetez vos ticket</p>
      <p>Ticket 1 jour : 10 euros <button data-testid='addTicketOneDay' onClick={()=>{setCount1(countDay1+1)}}>Ajouter au panier</button></p>
      <p>Ticket 2 jours : 15 euros <button onClick={()=>{setCount2(countDay2+1)}}>Ajouter au panier</button></p>
      <p>Panier:
      <p>Ticket 1 jour :<div data-testid='countday1'>{countDay1}</div><button data-testid='suppTicketOneDay' onClick={()=>{setCount1(countDay1-1)}}>-</button></p>
      <p>Ticket 2 jours :{countDay2}<button onClick={()=>{setCount2(countDay2-1)}}>-</button></p>
        <button>Valider</button>
      </p>
    </div>
  )
} 

export default Ticket