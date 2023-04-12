import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BsCartPlus } from 'react-icons/bs';

function Products(props) {

    const { addToCart } = props

    const [products, setProducts] = useState([])
    useEffect(() => {
        loadProducts();
    }, [])

    const loadProducts = async () => {
        const res = await axios.get("http://localhost:8080/products/getAllProduct")
        console.log(res.data.data)
        setProducts(res.data.data)
    }

    return (
        <section className='products'>
            <h4>Products (work in progress)</h4>
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
    )
}

export default Products