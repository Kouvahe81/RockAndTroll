import React from "react";
import axios from "axios";



class CreateBand extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            nameBand : '',
            numberMember : '',
            creationYear: '',
            history: '',
            bandImage: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
      const name = e.target.name
      this.setState({
          [name]: e.target.value
      })
    }
    submitHandler = e => {
        e.preventDefault()
        axios.post(  'http://localhost:4000/createBand',this.state)
            .then(response => {
                    alert("Votre groupe a été crée.")
                    this.setState({
                       nameBand : '',
                       numberMember : '',
                       creationYear: '',
                       history: '',
                       bandImage: ''
                    })
                })
                .catch(error => {
                    console.log(this.state)
                    alert("Groupe non crée")
                })
        }
    render () {
        return <form onSubmit={this.submitHandler}>
            <div className={'row-wrapper'}>
                <div className="column-wrapper contact">
                    <div>
                        <label htmlFor="Nom"> Nom du groupe :</label>
                        <input type="text" id="nameBand" name="nameBand"
                               value={this.state.nameBand}
                               onChange={this.handleChange}
                               required
                        />
                    </div>
                    <div>
                        <label htmlFor="numberMember"> Nombre de membres  :</label>
                        <input type="number" id="numberMember" name="numberMember"
                               value={this.state.numberMember}
                               onChange={this.handleChange}
                               required
                        />
                    </div>
                    <div>
                        <label htmlFor="Année de création"> Année de création  :</label>
                        <input type="date" id="creationYear" name="creationYear"
                               value={this.state.creationYear}
                               onChange={this.handleChange}
                               required
                        />
                    </div>
                    <div>
                        <label htmlFor="Histoire"> Histoire :</label>
                        <input type="textarea" id="history" name="history"
                               value={this.state.history}
                               onChange={this.handleChange}
                               required
                        />
                    </div>
                    <div>
                        <label htmlFor="image"> Upload Image  </label>
                        <input type='file' id='image' name='image'
                           onChange={this.handleChange}
                           value={this.state.bandImage}
                           className='form-control from-group'
                        />
                    </div>
                    <div className="confirmer">
                        <button className='btn btn-primary' type="submit" id='sub' name='sub'> Valider </button>
                    </div>
                </div>
            </div>
        </form>
    }
}

export default CreateBand