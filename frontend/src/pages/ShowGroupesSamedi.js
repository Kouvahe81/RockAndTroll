import  AlexPaquette from '../assets/AlexPaquette.png'
import  BricEtBroc from '../assets/BricEtBroc.png'
import  Endless_dive from '../assets/Endless_dive.png'
import  Powersolo from '../assets/Powersolo.png'
import  The_Spunboys from '../assets/The_Spunboys.png'
import  lily from '../assets/lily.jpg'
import  corbi from '../assets/corbi.jpg'
import  ming from '../assets/ming.jpg'
import  blackbomba from '../assets/blackbomba.jpg'
import  copaindj from '../assets/copaindj.jpg'
import '../styles/ShowGroupes.css'

// Fonction pour la page  qui affiches les groupes

function ShowGroupesSamedi(){
    return(
        <div>
            <ul>
                <p><h1>SCENE ROCK</h1></p>
                <li> <img className='image-group' src={lily} alt='image lily band'/><p>Heures :<b>17h30 à 18h30</b></p> </li>
                <li> <img className='image-group' src={corbi} alt='image corbi band'/><p>Heures :<b>19h20 à 20h20</b></p> </li>
                <li> <img className='image-group'  src={ming} alt='image ming band'/><p>Heures :<b>21h10 à 22h10</b></p></li>
                <li> <img className='image-group' src={blackbomba} alt='image black band'/><p>Heures :<b>23h10 à 00h10</b></p> </li>
                <li> <img className='image-group' src={copaindj} alt='image copain band'/><p>Heures :<b>01h30 à 2h30</b></p> </li>

            </ul>
            <ul>
                <p><h1>SCENE TROLLS</h1></p>

            </ul>
            <ul>
                <p><h1>SCENE RASTA SQUARE</h1></p>

            </ul>
        </div>
    ) 
}




export default ShowGroupesSamedi