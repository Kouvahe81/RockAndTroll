import React from "react";
import ReactDOM from 'react-dom'
import  AchatTicket from './pages/Ticket'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import LineUp from "./pages/LineUp";
import Home from "./pages/Home"
import Inscription from "./pages/Inscription"
import Connexion from "./pages/Connexion"
import CreateBand from "./pages/CreateBand"


ReactDOM.render(
  <BrowserRouter>
   <Header/>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='achat-ticket' element={<AchatTicket/>}/>
        <Route path='/lineUp' element={<LineUp/>}/>
        <Route path='/inscription' element={<Inscription/>}/>
        <Route path='/connexion' element={<Connexion/>}/>
        <Route path='/creationBand' element ={<CreateBand/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)