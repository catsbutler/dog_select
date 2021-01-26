import React from 'react'
import DogImage from './components/DogImage'
import DogSelect from './components/DogSelect'
import './App.css'

class App extends React.Component{
  render(){
    return <div>
      <DogSelect />
      <DogImage />
    </div>
  }
}

export default App;
