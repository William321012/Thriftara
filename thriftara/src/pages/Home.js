import React, { useState } from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import Nike from '../logo/nikelogo.jpeg'
import Addidas from '../logo/addidaslogo.png'
import Gucci from '../logo/Gucci.jpeg'
import Prada from '../logo/pradalogo.jpeg'
import Supreme from '../logo/Supreme_Logo.png'
import MPant1 from '../images/menpants1.jpeg'
import MPant2 from '../images/menpants2.webp'
import MTop1 from '../images/mentop1.webp'
import MTop2 from '../images/mentop2.webp'
import WPant1 from '../images/womenpant1.webp'
import WPant2 from '../images/womenpant2.webp'
import WTop1 from '../images/womenstop1.jpeg'
import WTop2 from '../images/womenstop2.jpeg'
import WTop3 from '../images/womentop3.jpeg'
import { images } from '../components/carouselData'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs' 

function Home() {

  const [currentImage, setCurrentImage] = useState(0)

  return (
    <>
      <div className='home-container'>
        <section className='carousel-container'>
          <div className='carousel-item' style={{backgroundImage: `url(${images[currentImage].img})`}}>
            <div className='left' onClick={() => {currentImage > 0 && setCurrentImage(currentImage - 1)}}>
              <BsChevronLeft size={60}/>
            </div>
            <div className='center'></div>
            <div className='right' onClick={() => {currentImage < images.length - 1 && setCurrentImage(currentImage + 1)}}><BsChevronRight size={60}/></div>
          </div>
        </section>

        <section className='brands'>
          <Link to='/brands'><h3>Brands</h3></Link>
          <img src={Nike} alt='nike logo' style={{ width: 100, height: 100, marginRight: 15 }} />
          <img src={Addidas} alt='addidas logo' style={{ width: 130, height: 100, marginRight: 15 }} />
          <img src={Gucci} alt='gucci logo' style={{ width: 140, height: 100, marginRight: 15 }} />
          <img src={Prada} alt='prada logo' style={{ width: 130, height: 100, marginRight: 15 }} />
          <img src={Supreme} alt='supreme logo' style={{ width: 270, height: 100, marginRight: 15 }} />
        </section>

        <section className='mens'>
          <Link to='/mens'><h3>Menswear</h3></Link>
          <img src={MPant1} alt='black cargos' style={{ width: 100, height: 100, marginRight: 15 }} />
          <img src={MPant2} alt='green sweats' style={{ width: 100, height: 100, marginRight: 15 }} />
          <img src={MTop1} alt='collard shirt' style={{ width: 100, height: 100, marginRight: 15 }} />
          <img src={MTop2} alt='striped shirt' style={{ width: 100, height: 100, marginRight: 15 }} />
        </section>

        <section className='womens'>
          <Link to='/womens'><h3>Womenswear</h3></Link>
          <img src={WPant1} alt='black jeans' style={{ width: 85, height: 100, marginRight: 15 }} />
          <img src={WPant2} alt='green cargos' style={{ width: 85, height: 100, marginRight: 15 }} />
          <img src={WTop1} alt='striped shirt' style={{ width: 85, height: 100, marginRight: 15 }} />
          <img src={WTop2} alt='crop sweater' style={{ width: 80, height: 100, marginRight: 15 }} />
          <img src={WTop3} alt='corduroy' style={{ width: 85, height: 100, marginRight: 15 }} />
        </section>

        <section className='recommendations'>
          <Link to='/'><h3>Our Recommendations</h3></Link>
        </section>
      </div>
    </>
  )
}

export default Home