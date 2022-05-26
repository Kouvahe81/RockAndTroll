import {Link} from "react-router-dom";
import '../styles/Header.css'
//import {useState} from "react";

function Header(){
    //const [status, setStatus] = useState(false)
    //console.log(('gggg'+ Status))
        return(
            <nav className='header'>
                <ul>
                    <li><Link to='/'> Accueil</Link></li>
                    <li><Link to='/lineUp'> Line-up </Link></li>
                    <li><Link to='/achat-ticket'> Achat Ticket </Link></li>
                    <li><Link to='/inscription'> Inscription </Link> </li>
                    <li><Link to='/connexion'> Connexion </Link> </li>
                    <li><Link to='/creationBand'> Création de groupe </Link></li>
                </ul>
            </nav>
        )
}

export  default  Header