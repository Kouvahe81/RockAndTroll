import  CrocrodileDundish from '../assets/CrocrodileDundish.png'
import  FFK from '../assets/FFK.png'
import  Redshift from '../assets/Redshift.png'
import  The_Tone_Stellars from '../assets/The_Tone_Stellars.png'
import  djPourri from '../assets/djPourri.png'
import  Juicy from "../assets/Juicy.png"
import  jukepop from "../assets/jukepop.jpg"
import  letsRock from "../assets/letsRock.jpg"
import '../styles/ShowGroupes.css'

// Fonction pour la page  qui affiches les groupes

function ShowGroupesVendredi(){
    return(
        <div>
            <ul className='SceneRasta'>
                <p><h1>SCENE RASTA SQUARE</h1></p>
                <li> <img className='image-group' src={CrocrodileDundish} alt='image CrocrodileDundish band'/><p>Heures : <b>18h50 à 19h40</b></p> </li>
                <li> <img className='image-group' src={The_Tone_Stellars} alt='image The_Tone_Stellars band'/><p>Heures : <b>20h40 à 21h30</b></p> </li>
                <li> <img className='image-group' src={djPourri} alt='image djPourri'/><p>Heures : <b>22h40 à 23h30</b></p></li>
                <li> <img className='image-group' src={jukepop} alt='image jukepop band'/><p>Heures : <b>01h00 à 02h30</b> </p> </li>
            </ul>
            <ul className='SceneRock'>
                <p><h1>SCENE ROCK</h1></p>
                <li> <img className='image-group' src={letsRock} alt='image letsRock band'/><p>Heures : <b>18h20 à 18h50</b></p> </li>
                <li> <img className='image-group' src={Redshift} alt='image Redshift band'/><p>Heures : <b>19h40 à 20h40</b></p> </li>
                <li> <img className='image-group' src={Juicy} alt='image Juicy band'/><p>Heures : <b>21h40 à 22h40</b></p> </li>
                <li> <img className='image-group' src={FFK} alt='image BricEtBroc band'/><p>Heures : <b>23h30 à 00h30</b></p> </li>
            </ul>
        </div>
    ) 
}

export default ShowGroupesVendredi