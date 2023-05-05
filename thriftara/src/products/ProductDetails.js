import React from 'react'
import { useParams } from 'react-router-dom'
import { BsCartPlus } from 'react-icons/bs'
import '../styles/ProductDetails.css'
import axios from 'axios'

function ProductDetails(props) {

    const { products } = props

    const { title } = useParams()

    const addCart = async (id, num) => {
        await axios.post(`http://localhost:8080/carts/insertToCart?pid=${id}&amount=${num}`)
    }

    return (
        <div className='prod-deets-container'>

            {products.filter(item => item.title === title)
                .map((item) => (
                    <div key={item.id} className='product-details'>
                        <img src={item.image} alt={item.title} />
                        <div className='details'>
                            <strong>{item.title}</strong>
                            <br></br>
                            Price: ${item.price}
                            <br></br>
                            Description: {item.itemDescription}
                            <br></br>
                            Condition: {item.itemCondition}
                            <br></br>
                            Id: {item.id}
                            <br></br>
                            num: {item.num}
                            <br></br>
                            size: {item.size}
                            <br></br>
                            gender: {item.gender}
                            <br></br>
                            created user: {item.createdUser}
                            <button className='add-to-cart' onClick={() => addCart(item.id, 1)}>Add To Cart <BsCartPlus size={20} /></button>
                        </div>
                    </div>
                ))
            }
            
        </div>
    )
}

export default ProductDetails