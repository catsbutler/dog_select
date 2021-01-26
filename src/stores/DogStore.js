/*
이 스토어의 역할 :
컴포넌트에서 어떤 견종을 선택하는가에 따라 
견종에 대한 상태값을 변경할 수 있도록 한다!
+ 견종을 토대로 웹서버에 API를 요청할 수 있도록 한다.
*/
import { observable, action } from 'mobx'
import axios from 'axios'
export class DogStore{

  @observable dog = "mix"

  @action
  setDog = (breed) => {
    console.log(breed)
    this.dog = breed;
  }

  // 요청 보내는 메소드
  @action
  getImage = async () => await axios.get(`https://dog.ceo/api/breed/${this.dog}/images/random`)
  


}