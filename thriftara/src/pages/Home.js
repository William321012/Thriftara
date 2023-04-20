import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import Nike from '../logo/nikelogo.jpeg'
import Addidas from '../logo/addidaslogo.png'
import Gucci from '../logo/Gucci.jpeg'
import Prada from '../logo/pradalogo.jpeg'
import Supreme from '../logo/Supreme_Logo.png'
import { BsCartPlus } from 'react-icons/bs'
import Hero from '../components/Carousel/Carousel'

function Home(props) {

  const { mproducts, wproducts, addToCart } = props

  const [products, setProducts] = useState([
  ])

  useEffect(() => {
    loadProducts();
  }, [])

  const loadProducts = async () => {
    const res = await axios.get("http://localhost:8080/products/getAllProduct")
    console.log(res.data.data)
    setProducts(res.data.data)
    // setPost(res.data.data)
  }

  // const [post, setPost] = useState({
  //   cid: "",
  //   pid: "",
  //   price: "",
  //   num: "",
  //   created_user: "",
  // })

  // const { {cid=13}, {pid=101}, {created_user="meggie"}, {num=1}} = post
  // setCart({...cart, [e.target.field]: e.target.value})
  // const cartInput = (e) => {
  //   setPost({...post, [e.target.name]: e.target.value})
  // }

  //post to database
  // const addCart = async() => {
  //   const res = await axios.post("http://localhost:8080/carts/insertToCart",
  //     {products})
  //   console.log(res.data)
  // }

  return (
    <>
      <section className='product-carousel'>
        <Hero />
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

        <section className='products'>
          <h3>Products (work in progress)</h3>
          <section className='products-section'>
            {products.map((product) => (
              <div className='product-items' key={product.id}>
                <img src={product.image} alt={product.title} />
                <h5>{product.title}</h5>
                <h6>Price: ${product.price}</h6>
                <button className='add-cart-btn' onClick={() => addToCart(product)}>Add To Cart <BsCartPlus size={20} /></button>
              </div>
            ))}
          </section>
        </section>

        <section className='mens'>
          <Link to='/mens' className="text-dark" style={{ textDecoration: 'none' }}><h3>Menswear</h3></Link>
          <section className='products-section'>
            {mproducts.map((product) => (
              <div className='product-items' key={product.id}>
                <img src={product.image} alt={product.title} />
                <h5>{product.title}</h5>
                <h6>Price: ${product.price}</h6>
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
                <h6>Price: ${product.price}</h6>
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