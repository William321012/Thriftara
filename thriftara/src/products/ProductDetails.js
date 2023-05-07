import React from 'react'
import { useParams } from 'react-router-dom'
import { BsCartPlus } from 'react-icons/bs'
import '../styles/ProductDetails.css'
import axios from 'axios'

function ProductDetails(props) {

    const { products } = props

    const { title } = useParams()

    let ImgURL = React.createRef();

    const createImgURL = (url) => {
        ImgURL = "http://localhost:8080" + url + "_1.png";
    };

    const addCart = async (id, num) => {
        await axios.post(`http://localhost:8080/carts/insertToCart?pid=${id}&amount=${num}`)
    }

    return (
        <div className='prod-deets-container'>

            {products.filter(item => item.title === title)
                .map((item) => (
                    <div key={item.id} className='product-details'>
                        {createImgURL(item.image)}
                        <img src={ImgURL} alt={item.title} />
                        <div className='details'>
                            <strong>{item.title}</strong>
                            <br></br>
                            ${item.price}
                            <br></br>
                            Description: {item.itemDescription}
                            <br></br>
                            Condition: {item.itemCondition}
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