import React from 'react'
import { breeds } from '../util/breeds'
import { inject, observer } from 'mobx-react'
import { DogStore } from '../stores/DogStore'
import '../styles/DogSelect.css'



@inject('dogStore')
@observer
class DogSelect extends React.Component{

  constructor(props) {
    super(props)
    this.state = {currentText: ""}
  }

  handleChange = event => {
    this.setState({currentText: event.target.value}) 
  }



  render(){

    const {dogStore} = this.props

    return <div>
      <input className="input_breed" type="text" placeholder="select breed" 
      onChange = {e => this.handleChange(e)} />

      <ul className="breeds">
        {breeds.map((breed, index) => {
        return breed.includes(this.state.currentText) && <li className="breeds_breed"
        onClick={() => dogStore.setDog(breed)} 
        key={index}>{breed}</li>  //dogStore 구조분해
      })} 
      </ul>

    </div>
  }
}

export default DogSelect;