import React from 'react'
import { BsCartPlus } from 'react-icons/bs';

function WomensProductDisplay(props) {
    const { image, title, unitPrice } = props.data;
    return (
        <div className='products-container'>
            <div className='product-img'><img src={image} alt='womens products' style={{ width: 200, height: 200 }} /></div>
            <div className='product-name'><h4>{title}</h4></div>
            <div className='price'><p>Price: ${unitPrice}</p></div>
            <button className='addcart'><BsCartPlus /></button>
        </div>
    )
}

export default WomensProductDisplay