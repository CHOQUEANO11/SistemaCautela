import React, { Component } from 'react'
import { withRouter} from "react-router-dom";

import Header from '../../components/Header';
import BackgroundSlideshow from 'react-background-slideshow';
import { Slide } from "./styles";


import image1 from '../../assets/images/img1.jpg'
import image2 from '../../assets/images/img2.jpg'
import image3 from '../../assets/images/img3.jpg'


class Apresentation extends Component {

  async componentDidMount() {
    const dados =  localStorage.getItem('userData');
    const info = JSON.parse(dados);
    console.log(info.payload.nome)
  }

  render () {
    return (
      <div>
        <Header />
        <Slide>
        <BackgroundSlideshow  images={[ image1, image2, image3 ]} />
        </Slide>
      </div>
    )
  }
}

export default withRouter(Apresentation);
