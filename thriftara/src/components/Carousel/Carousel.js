import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { images } from './carouselData';
import '../../styles/Carousel.css'

function HomeCarousel() {
  return (
    <div>
        <Carousel variant="dark">
            {
                images.map(images => {
                    return (
                        <Carousel.Item key={images.id}>
                            <img src={images.img} alt={images.title} className="carousel-img"/>
                            {/* <Carousel.Caption>
                                <h3>{images.title}</h3>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default HomeCarousel