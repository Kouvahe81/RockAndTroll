import React from "react";
import axios from "axios";

class Inscription extends React.Component {

    constructor (props){
        super(props)
        this.state = {
            fullName : '',
            userName : '',
            email : '',
            password : '',
            confirmPassword : '',
            mailValide : false,
            mdpValide : false,
            checkMail : false
        }
        this.analyze = this.analyze.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
      const name = e.target.name
      this.setState({
          [name]: e.target.value
      })
    }

    analyze(e) {
        const name = e.target.name
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#_\$%\^&\*])(?=.{8,})");
        const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        if(strongRegex.test(e.target.value)) {
            this.setState({ backgroundColor: "#0F9D58", [name]: e.target.value });
        } else if(mediumRegex.test(e.target.value)) {
            this.setState({ backgroundColor: "#F4B400", [name]: e.target.value });
        } else {
            this.setState({ backgroundColor: "#DB4437",  [name]: e.target.value });
        }
    }


    submitHandler = e => {
        e.preventDefault()
        console.log('1 '+this.state.checkMail)
        this.checkEmail()
        console.log('2 '+this.state.checkMail)
        this.validationEmail()
        this.confirmPassword()

        console.log("Check mail exist "+ this.state.checkMail)

        if(this.state.mailValide === true && this.state.mdpValide === true && this.state.checkMail === false){
                console.log(this.state.mailValide,this.state.mdpValide, this.state.checkMail)
                axios.post('http://localhost:4000/createClient', this.state)
                .then(response => {
                    console.log(response)
                    alert("Votre inscription est validée.")
                    window.location.assign("http://localhost:3000/connexion")
                    this.setState({
                        fullName : '',
                        userName : '',
                        email : '',
                        password : '',
                        confirmPassword : '',
                        mailValide : false,
                        mdpValide : false,
                        checkMail : false
                    })
                })
                .catch(error => {
                    alert("Les mots de passe ne sont pas identiques")
                })
        }
    }

    validationEmail = () => {
        let regularExpression = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/ ;
        if (regularExpression.test(this.state.email)){
            console.log("Adresse mail valide.");
            this.state.mailValide = true
        }
        else{
            alert("Adresse Mail invalide.")
            this.state.mailValide = false
        }
    }

    confirmPassword = () => {
        if(this.state.password === this.state.confirmPassword){
            this.state.mdpValide = true
        }
        else{
            this.state.mdpValide = false
            alert("Les mots de passe ne sont pas identiques.")
        }
    }

    async checkEmail(){
         const rep = await axios.get('http://localhost:4000/searchEmail/'+ this.state.email)
            if(rep){
                //console.log(rep)
                this.setState({checkMail: true})

                alert("Changer de mail SVP")
            }
    }
    render () {
        return <form onSubmit={this.submitHandler}>
            <div className={'row-wrapper'}>
                <div className="column-wrapper contact">
                    <h2>Veuillez remplir les informations ci-dessous</h2>
                    <div>
                        <label htmlFor="Nom">Nom :</label>
                        <input type="texte" id="nom" name="fullName"
                               value={this.state.fullName}
                               onChange={this.handleChange}
                               required
                        />
                    </div>
                    <div>
                        <label htmlFor="Prenom">Prenom :</label>
                        <input type="texte" id="prenom" name="userName"
                               value={this.state.userName}
                               onChange={this.handleChange}
                               required
                        />
                    </div>
                    <div>
                        <label htmlFor="Mail">Mail :</label>
                        <input type="texte" id="mail" name="email" data-testid="mail"
                               value={this.state.email}
                               onChange={this.handleChange}
                               required
                        />
                    </div>
                    <div>
                        <label htmlFor="Mdp">Mot de passe :</label>
                        <input  style={{ backgroundColor: this.state.backgroundColor }} type="password" id="mdp" name="password"
                                value={this.state.password}
                                onChange={this.analyze}
                               required
                        />
                    </div>
                    <div>
                        <label htmlFor="ConfMdp">Confirmer mot de passe :</label>
                        <input type="password" id="confmdp" name="confirmPassword"
                               value={this.state.confirmPassword}
                               onChange={this.handleChange}
                               required
                        />
                    </div>
                    <div className="confirmer">
                        <button className='btn btn-primary' type="submit" id='sub' name='sub'>S'inscrire</button>
                    </div>

                </div>
            </div>
        </form>
    }
}

export default Inscription