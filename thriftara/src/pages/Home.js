import React, { useState } from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import Nike from '../logo/nikelogo.jpeg'
import Addidas from '../logo/addidaslogo.png'
import Gucci from '../logo/Gucci.jpeg'
import Prada from '../logo/pradalogo.jpeg'
import Supreme from '../logo/Supreme_Logo.png'
import { images } from '../components/carouselData'
import { MProducts } from '../products/MensProducts'
import { WProducts } from '../products/WomensProducts'
// import MItem from '../products/MensProductDisplay'
// import WItem from '../products/WomensProductDisplay'
import { BsChevronLeft, BsChevronRight, BsCartPlus } from 'react-icons/bs'


function Home() {

  const [currentImage, setCurrentImage] = useState(0)
  const [cart, setCart] = useState()

  return (
    <>
      <div className='home-container'>
        <section className='carousel-container'>
          <div className='carousel-item' style={{ backgroundImage: `url(${images[currentImage].img})` }}>
            <div className='left' onClick={() => { currentImage > 0 && setCurrentImage(currentImage - 1) }}>
              <BsChevronLeft size={60} />
            </div>
            <div className='center'></div>
            <div className='right' onClick={() => { currentImage < images.length - 1 && setCurrentImage(currentImage + 1) }}><BsChevronRight size={60} /></div>
          </div>
        </section>

        <section className='brands'>
          <Link to='/brands'><h3>Brands</h3></Link>
          <img src={Nike} alt='nike logo' style={{ width: 120, height: 120, marginRight: 15 }} />
          <img src={Addidas} alt='addidas logo' style={{ width: 140, height: 120, marginRight: 15 }} />
          <img src={Gucci} alt='gucci logo' style={{ width: 160, height: 120, marginRight: 15 }} />
          <img src={Prada} alt='prada logo' style={{ width: 150, height: 120, marginRight: 15 }} />
          <img src={Supreme} alt='supreme logo' style={{ width: 290, height: 120, marginRight: 15 }} />
        </section>

        <section className='mens'>
          <Link to='/mens'><h3>Menswear</h3></Link>
          {/* <section className='products'>
          {MProducts.map((product) => (
            <MItem data={product} />
          ))} */}
          {/* </section> */}
          <section className='products'>
            {MProducts.map((product) => (
              <div className='product-items' key={product.id}>
                <div className='item-img'><img src={product.image} alt={product.title} style={{ width: 200, height: 200 }} /></div>
                <div className='item-name'><h4>{product.title}</h4></div>
                <div className='item-price'><p>Price: ${product.unitPrice}</p></div>
                <button className='add-cart-btn'>Add To Cart <BsCartPlus size={20}/></button>
              </div>
            ))}
          </section>
        </section>

        <section className='womens'>
          <Link to='/womens'><h3>Womenswear</h3></Link>
          <section className='products'>
            {WProducts.map((product) => (
              <div className='product-items' key={product.id}>
                <div className='item-img'><img src={product.image} alt={product.title} style={{ width: 200, height: 250 }}/></div>
                <div className='item-name'><h4>{product.title}</h4></div>
                <div className='item-price'><p>Price: ${product.unitPrice}</p></div>
                {/* add onClick function to add to cart */}
                <button className='add-cart-btn'>Add To Cart <BsCartPlus size={20}/></button>
              </div>
            ))}
          </section>
        </section>

        <section className='recommendations'>
          <Link to='/'><h3>Our Recommendations</h3></Link>
          <div className='rec-container'>
            <div className='rec-card'></div>
            <div className='rec-card'></div>
            <div className='rec-card'></div>
            <div className='rec-card'></div>
            <div className='rec-card'></div>
          </div>
        </section>

      </div>
    </>
  )
}

export default Home