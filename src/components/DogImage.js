import React from 'react'
import { inject, observer } from 'mobx-react'
import '../styles/DogImage.css'

@inject('dogStore')
@observer
class DogImage extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      gotImage : false,
      src : ""
    }
  }

  handleClick = () => {
    const {dogStore} = this.props

    dogStore.getImage().then(result => {
      this.setState({
        gotImage: true,
        src: result.data.message
      })
      
    }).catch(failed => {
      console.log(failed)
    })

  }

  render(){
    const {gotImage, src} = this.state
    const {dogStore} = this.props

    return <div className="album">
      <div className="album_api">
        <p>
          URL: https://dog.ceo/api/breed/<input value={dogStore.dog} 
          className="album_api_breed" type="text" readOnly />/images/random
          <button onClick={this.handleClick}>FETCH</button>
        </p>
      </div>
      <div className="album_image">
        {gotImage && <img src={src} alt="DOG IMAGE" />}
      </div>
    </div>
  }
}

export default DogImage;