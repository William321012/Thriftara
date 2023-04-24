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

  const { mproducts, wproducts, addToCart, products } = props

  const navigate = useNavigate()

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
            <Link to='https://www.nike.com'><img src={Nike} alt='nike logo' /></Link>
            <Link to='https://www.adidas.com/us'><img src={Addidas} alt='addidas logo' /></Link>
            <Link to='https://www.gucci.com/us/en/'><img src={Gucci} alt='gucci logo' /></Link>
            <Link to='https://www.prada.com/us/en.html'><img src={Prada} alt='prada logo' /></Link>
            <Link to='https://us.supreme.com'><img src={Supreme} alt='supreme logo' /></Link>
          </div>
        </section>

        <section className='products'>
          <h3>Products (work in progress)</h3>
          <section className='products-section'>
            {products.map((product) => (
              <div className='product-items' key={product.id}>
                <img src={product.image} alt={product.title} onClick={() => navigate(`/product/${product.title}`)} />
                <h5>{product.title}</h5>
                <h6>Price: ${product.price.toFixed(2)}</h6>
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
                <img src={product.image} alt={product.title} onClick={() => navigate(`/product/${product.title}`)} />
                <h5>{product.title}</h5>
                <h6>Price: ${product.price.toFixed(2)}</h6>
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
                <img src={product.image} alt={product.title} onClick={() => navigate(`/product/${product.title}`)} />
                <h5>{product.title}</h5>
                <h6>Price: ${product.price.toFixed(2)}</h6>
                <button className='add-cart-btn' onClick={() => addToCart(product)}>Add To Cart <BsCartPlus size={20} /></button>
              </div>
            ))}
          </section>
        </section>

        <section className='recommendations'>
          <Link to='/' className="text-dark" style={{ textDecoration: 'none' }}><h3>Our Recommendations</h3></Link>
          <div className='rec-container'>
            {/* <div className='rec-card'></div>
            <div className='rec-card'></div>
            <div className='rec-card'></div>
            <div className='rec-card'></div>
            <div className='rec-card'></div> */}
            {/* {products.map(product => (
              <div className='rec-card' key={product.id}>
                <img src={product.image} alt={product.title} onClick={() => navigate(`/product/${product.title}`)} />
                <h5>{product.title}</h5>
                <h6>Price: ${product.price}</h6>
                <button className='add-cart-btn' onClick={() => addToCart(product)}>Add To Cart <BsCartPlus size={20} /></button>
              </div>
            ))} */}
            {products.filter(product => product.id > 25)
              .map((product) => (
                <div key={product.id} className='rec-card'>
                  <img src={product.image} alt={product.title} onClick={() => navigate(`/product/${product.title}`)} />
                  <h5>{product.title}</h5>
                  <h6>price: ${product.price.toFixed(2)}</h6>
                  <h6>filter: {product.id}</h6>
                  <button className='add-cart-btn' onClick={() => addToCart(product)}>Add To Cart <BsCartPlus size={20} /></button>
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