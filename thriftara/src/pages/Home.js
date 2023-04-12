import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import Nike from '../logo/nikelogo.jpeg'
import Addidas from '../logo/addidaslogo.png'
import Gucci from '../logo/Gucci.jpeg'
import Prada from '../logo/pradalogo.jpeg'
import Supreme from '../logo/Supreme_Logo.png'
import { BsCartPlus } from 'react-icons/bs'
import Carousel from '../components/Carousel/Carousel'
import Products from '../products/Products'

function Home(props) {

  const { mproducts, wproducts, addToCart } = props

  return (
    <>
      <section className='product-carousel'>
        <Carousel />
      </section>

      <div className='home-container'>
        <section className='home-brands'>
          <Link to='/brands' className="text-dark" style={{ textDecoration: 'none' }}><h3>Brands</h3></Link>
          <div className='brand-cards'>
            <img src={Nike} alt='nike logo' />
            <img src={Addidas} alt='addidas logo' />
            <img src={Gucci} alt='gucci logo' />
            <img src={Prada} alt='prada logo' />
            <img src={Supreme} alt='supreme logo' />
          </div>
        </section>

        {/* <section>
          <h1>testing</h1>
          <section className='products-section'>
              <div className='product-items' key={products.id}>
              <img src={products.image} alt={products.title} />
              <h5>{products.title}</h5>
              <h6>Price: ${products.price}</h6>
              <button className='add-cart-btn' onClick={() => addToCart(products)}>Add To Cart <BsCartPlus size={20} /></button>
            </div>
          </section>
        </section> */}

        <Products />

        <section className='mens'>
          <Link to='/mens' className="text-dark" style={{ textDecoration: 'none' }}><h3>Menswear</h3></Link>
          <section className='products-section'>
            {mproducts.map((product) => (
              <div className='product-items' key={product.id}>
                <img src={product.image} alt={product.title} />
                <h5>{product.title}</h5>
                <h6>Price: ${product.unitPrice}</h6>
                <button className='add-cart-btn' onClick={() => addToCart(product)}>Add To Cart <BsCartPlus size={20} /></button>
              </div>
            ))}
          </section>
        </section>

        <section className='womens'>
          <Link to='/womens' className="text-dark" style={{ textDecoration: 'none' }}><h3>Womenswear</h3></Link>
          <section className='products-section'>
            {wproducts.map((product) => (
              <div className='product-items' key={product.id}>
                <img src={product.image} alt={product.title} />
                <h5>{product.title}</h5>
                <h6>Price: ${product.unitPrice}</h6>
                <button className='add-cart-btn' onClick={() => addToCart(product)}>Add To Cart <BsCartPlus size={20} /></button>
              </div>
            ))}
          </section>
        </section>

        <section className='recommendations'>
          <Link to='/' className="text-dark" style={{ textDecoration: 'none' }}><h3>Our Recommendations</h3></Link>
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