import React from 'react'
import '../styles/Home.css'
import { Link, useNavigate } from 'react-router-dom'
import Nike from '../logo/nikelogo.jpeg'
import Addidas from '../logo/addidaslogo.png'
import Gucci from '../logo/Gucci.jpeg'
import Prada from '../logo/pradalogo.jpeg'
import Supreme from '../logo/Supreme_Logo.png'
import { BsCartPlus } from 'react-icons/bs'
import Hero from '../components/Carousel/Carousel'
import axios from 'axios'

function Home(props) {

  const { products } = props

  const navigate = useNavigate()

  let ImgURL = React.createRef();

  var createImgURL = (url) => {
    ImgURL = "http://localhost:8080" + url + "_1.png";
  };

  const addCart = async (id, num) => {
    await axios.post(`http://localhost:8080/carts/insertToCart?pid=${id}&amount=${num}`)
  }

  return (
    <>
      <section className='product-carousel'>
        <Hero />
      </section>

      <div className='home-container'>
        <section className='home-brands'>
          <Link to='/brands' className="text-dark" style={{ textDecoration: 'none' }}><h3>Brands</h3></Link>
          <div className='brand-cards'>
            <Link to='https://www.nike.com'><img src={Nike} alt='nike logo' /></Link>
            <Link to='https://www.adidas.com/us'><img src={Addidas} alt='addidas logo' /></Link>
            <Link to='https://www.gucci.com/us/en/'><img src={Gucci} alt='gucci logo' /></Link>
            <Link to='https://www.prada.com/us/en.html'><img src={Prada} alt='prada logo' /></Link>
            <Link to='https://us.supreme.com'><img src={Supreme} alt='supreme logo' /></Link>
          </div>
        </section>

        <section className='mens'>
          <Link to='/mens' className="text-dark" style={{ textDecoration: 'none' }}><h3>Menswear</h3></Link>
          <section className='products-section'>
            {products.filter(product => product.gender === 1)
              .map((product) => (
                <div className='product-items' key={product.id}>
                  {createImgURL(product.image)}
                  <img src={ImgURL} alt={product.title} onClick={() => navigate(`/product/${product.title}`)} />
                  <h5>{product.title}</h5>
                  <h6>Price: ${product.price.toFixed(2)}</h6>
                  <button className='add-cart-btn' onClick={() => addCart(product.id, 1)}>Add To Cart <BsCartPlus size={20} /></button>
                </div>
              ))}
          </section>
        </section>

        <section className='womens'>
          <Link to='/womens' className="text-dark" style={{ textDecoration: 'none' }}><h3>Womenswear</h3></Link>
          <section className='products-section'>
            {products.filter(product => product.gender === 2)
              .map((product) => (
                <div className='product-items' key={product.id}>
                  {createImgURL(product.image)}
                  <img src={ImgURL} alt={product.title} onClick={() => navigate(`/product/${product.title}`)} />
                  <h5>{product.title}</h5>
                  <h6>Price: ${product.price.toFixed(2)}</h6>
                  <button className='add-cart-btn' onClick={() => addCart(product.id, 1)}>Add To Cart <BsCartPlus size={20} /></button>
                </div>
              ))}
          </section>
        </section>

        <section className='recommendations'>
          <Link to='/' className="text-dark" style={{ textDecoration: 'none' }}><h3>Our Recommendations</h3></Link>
          <div className='rec-container'>
            {products.filter(product => product.priority < 5)
              .map((product) => (
                <div key={product.id} className='rec-card'>
                  {createImgURL(product.image)}
                  <img src={ImgURL} alt={product.title} onClick={() => navigate(`/product/${product.title}`)} />
                  <h5>{product.title}</h5>
                  <h6>price: ${product.price.toFixed(2)}</h6>
                  <button className='add-cart-btn' onClick={() => addCart(product.id, 1)}>Add To Cart <BsCartPlus size={20} /></button>
                </div>
              ))
            }
          </div>
        </section>
      </div>
    </>
  )
}

export default Home