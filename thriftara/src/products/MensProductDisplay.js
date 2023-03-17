import React from 'react'
// import { BsCartPlus } from 'react-icons/bs';

function ProductDisplay(props) {
    const { title, unitPrice, image } = props.data;
    return (
        <div className='products-container'>
            <div className='product-img'><img src={image} alt='product images' style={{ width: 200, height: 200 }} /></div>
            <div className='product-name'><h4>{title}</h4></div>
            <div className='price'><p>Price: ${unitPrice}</p></div>
            {/* <button className='addcart' onClick={addToCart}><BsCartPlus /></button> */}
        </div>
    )
}

export default ProductDisplay