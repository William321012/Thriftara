import React from 'react'
import { useParams } from 'react-router-dom'
import { BsCartPlus } from 'react-icons/bs'
import '../styles/ProductDetails.css'

function ProductDetails(props) {

    const { mproducts, wproducts, products, addToCart } = props

    const { title } = useParams()

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
                            <button className='add-to-cart' onClick={() => addToCart(item)}>Add To Cart <BsCartPlus size={20} /></button>
                        </div>
                    </div>
                ))
            }

            {mproducts.filter(item => item.title === title)
                .map((item) => (
                    <div key={item.id} className='product-details'>
                        <img src={item.image} alt={item.title} />
                        <div className='details'>
                            <strong>{item.title}</strong>
                            <br></br>
                            Price: ${item.price}
                            <br></br>
                            Description: {item.description}
                            <button className='add-to-cart' onClick={() => addToCart(item)}>Add To Cart <BsCartPlus size={20} /></button>
                        </div>
                    </div>
                ))
            }

            {wproducts.filter(item => item.title === title)
                .map((item) => (
                    <div key={item.id} className='product-details'>
                        <img src={item.image} alt={item.title} />
                        <div className='details'>
                            <strong>{item.title}</strong>
                            <br></br>
                            Price: ${item.price}
                            <br></br>
                            Description: {item.description}
                            <button className='add-to-cart' onClick={() => addToCart(item)}>Add To Cart <BsCartPlus size={20} /></button>
                        </div>
                    </div>
                ))
            }

            { }
        </div>
    )
}

export default ProductDetails