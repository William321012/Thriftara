import React from 'react'
import '../styles/Home.css'
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

function Home() {
  return (
    <>
      <div className='home-container'>
        <div><p>Home Page Work in Progress ...</p></div>
        <section className='carousel'><p>SlideShow -- npm install react-bootstrap</p></section>
        <section className='brands'>
          <p>Brands</p>
          <img src={Nike} alt='nike logo' style={{ width: 100, height:100, marginRight: 15 }}/>
          <img src={Addidas} alt='addidas logo' style={{ width: 130, height: 100, marginRight: 15 }}/>
          <img src={Gucci} alt='gucci logo' style={{ width: 140, height: 100, marginRight: 15 }}/>
          <img src={Prada} alt='prada logo' style={{ width: 130, height: 100, marginRight: 15 }}/>
          <img src={Supreme} alt='supreme logo' style={{ width: 270, height: 100, marginRight: 15 }}/>
        </section>
        <section className='mens'>
          <p>Menswear</p>
          <img src={MPant1} alt='black cargos' style={{ width: 100, height:100, marginRight: 15}}/>
          <img src={MPant2} alt='green sweats' style={{ width: 100, height:100, marginRight: 15}}/>
          <img src={MTop1} alt='collard shirt' style={{ width: 100, height:100, marginRight: 15}}/>
          <img src={MTop2} alt='striped shirt' style={{ width: 100, height:100, marginRight: 15}}/>
        </section>
        <section className='womens'>
          <p>Womenswear</p>
          <img src={WPant1} alt='black jeans' style={{ width: 85, height:100, marginRight: 15}}/>
          <img src={WPant2} alt='green cargos' style={{ width: 85, height:100, marginRight: 15}}/>
          <img src={WTop1} alt='striped shirt' style={{ width: 85, height:100, marginRight: 15}}/>
          <img src={WTop2} alt='crop sweater' style={{ width: 80, height:100, marginRight: 15}}/>
          <img src={WTop3} alt='corduroy' style={{ width: 85, height:100, marginRight: 15}}/>
        </section>
        <section className='recommendations'><p>Our Recommendations</p></section>
      </div>
    </>
  )
}

export default Home