import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import image1 from '../../assets/fondoArena.jpg';
import image2 from '../../assets/fondoPiedra.jpg';
import image3 from '../../assets/fondoLadrillos.jpg';
import image4 from '../../assets/fondoMallas.jpg';

const CarouselContainer = () => {
  return(
    <Carousel pause={false}>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={image4}
      alt="fourth slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

export default CarouselContainer;