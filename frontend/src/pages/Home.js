import main from '../assets/main.png'
import '../styles/Home.css'

function Home(){
    return(<div className='home-div'>
        <div class = "background-image">
           <img className='main-page-image' alt="photo page d\'accueil" src={main}/>
        </div>
        <div id="WelcomeTextspace">
            <span>
            Nous sommes heureux de vous annoncer que le festival "Rock and Troll" aura lieux cette année 2022 !
            Ce festival se deroulera du 15 au 16 avril avec la participation de nombreux groupes tel que : FFk, Bric et Broc ou encore Redshift !
            Vous retrouverez sur ce site toutes les informations dont vous aurez besoins concernant le festival.
            <ul>
                <li>un horaire précis du déroulement des concerts vous permettra de planifier votre weekend</li>
                <li>des informations complémentaires sur les groupes et leurs histoires</li>
                <li>la possibilité de créer votre propre planning en fonction de vos goûts </li>
                <li>et bien d'autres</li>
            </ul>
            Nous vous attendons nombreux.euses pour ce festival de cette année, vous pouvez dès à présent réserver vos places via la page "Achat Ticket".
            </span>
        </div>
    </div>)
}
export default Home
