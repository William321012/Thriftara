import React, { useEffect, useState } from 'react'
import '../styles/Cart.css'
import { BsTrash } from 'react-icons/bs'
import axios from 'axios';

function Cart(props) {

  //data and functions
  const { cartItems, addToCart, removeFromCart, removeItemFromCart } = props;
  //price calculations a(accumulator) c(current item)
  const subtotal = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  const tax = subtotal * .0852;
  //free shipping for orders over $75 else $10
  const shipping = subtotal > 75 ? 0 : 10;
  const total = subtotal + tax + shipping;

  const [cartDisplay, setCartDisplay] = useState([])

  useEffect(() => {
    loadCart();
  }, [])

  const loadCart = async() => {
    const res = await axios.get("http://localhost:8080/carts/display")
    console.log(res.data.data)
    setCartDisplay(res.data.data)
  }

  const cartsubtotal = cartDisplay.reduce((a, c) => a + c.unitPrice * c.num, 0)
  const carttax = cartsubtotal * .0852;
  const cartshipping = cartsubtotal > 75 ? 0 : 10;
  const carttotal = cartsubtotal + carttax + cartshipping;

  const addnum = async(id) => {
    const res = await axios.put(`http://localhost:8080/carts/addNumFromTheCart?id=${id}`)
    loadCart()
  }

  const minusnum = async(id) => {
    const res = await axios.put(`http://localhost:8080/carts/minusNumFromTheCart?id=${id}`)
    loadCart()
  }

  const deleteItem = async(id) => {
    const res = await axios.delete(`http://localhost:8080/carts/delete?id=${id}`)
    // setCartDisplay(res.data.data)
    loadCart()
  }

  return (
    <div>
      <div className='cart-page-container'>
        <div className='cart-empty'>

          

          {/* cartItems refer to the regular cart functions not connected to db
          cartDisplay is connected to database */}



          {/* {cartItems.length === 0 && <h4>Shopping Cart is Empty... Add
            Items to Cart</h4>} */}
          {cartDisplay.length === 0 && <h4>Shopping Cart is Empty... Add
            Items to Cart</h4>}
        </div>

        <div className='cart-items-mapping'>
          Cart item display
          {cartDisplay.map((item) => (
            <div key={item.id} className='cart-items'>
              <img src={item.image} alt={item.title} className='cart-item-img' />
              <div><h5>{item.title}</h5></div>
              <div className='cart-quantity'>
                Quantity:{' '}
                <button onClick={() => minusnum(item.id)} className='minus-qty'>-</button>
                {item.num}
                <button onClick={() => addnum(item.id)} className='add-qty'>+</button>
                <br></br>
                Price: ${item.unitPrice.toFixed(2)}
              </div>
              <div className='remove-cart-btn'>
                {/* <BsTrash size={20} onClick={() => removeItemFromCart(item)} /> */}
                <BsTrash size={20} onClick={() => deleteItem(item.id)} />
              </div>
            </div>
          ))}
        </div>

        {/* <div className='cart-items-mapping'>
          regular display
          {cartItems.map((item) => (
            <div key={item.id} className='cart-items'>
              <img src={item.image} alt={item.title} className='cart-item-img' />
              <div><h5>{item.title}</h5></div>
              <div className='cart-quantity'>
                Quantity:{' '}
                <button onClick={() => removeFromCart(item)} className='minus-qty'>-</button> */}
                {/* <button onClick={(e) => this.handleRemove(e)}>-</button> */}
                {/* {item.qty}
                <button onClick={() => addToCart(item)} className='add-qty'>+</button>
                <br></br>
                ${item.price.toFixed(2)}
              </div>
              <div className='remove-cart-btn'>
                <BsTrash size={20} onClick={() => removeItemFromCart(item)} />
              </div>
            </div>
          ))}
        </div> */}

        {/* <div className='cart-checkout-summary'>
          regular checkout
          {cartItems.length !== 0 && (
            <>
              <div className='checkout-summary'>
                <h5><b>Items in Cart</b></h5>
                {cartItems.map((item) => (
                  <div key={item.id} >
                    <div className='checkout-item'><strong>{item.title}</strong>{' '}x{item.qty}</div>
                    <div className='checkout-quantity'>
                      Price:{' '}
                      ${(item.qty * item.price).toFixed(2)}
                    </div>
                  </div>
                ))}
                <div className='cart-sum-title'><h4>Cart Summary</h4></div>
                <div className='subtotal'><strong>Subtotal: </strong>${subtotal.toFixed(2)}</div>
                <div className='tax'><strong>Tax: </strong>${tax.toFixed(2)}</div>
                <div className='shipping'><strong>Shipping: </strong>${shipping.toFixed(2)}</div>
                <div className='total'><strong>Total: </strong>${total.toFixed(2)}</div>
                <div className='checkout'>
                  <button className='checkout-btn'
                    onClick={() => alert("items checked out")}>Checkout</button>
                </div>
              </div>
            </>
          )}
        </div> */}

        <div className='cart-checkout-summary'>
          cart display checkout
          {cartDisplay.length !== 0 && (
            <>
              <div className='checkout-summary'>
                <h5><b>Items in Cart</b></h5>
                {cartDisplay.map((item) => (
                  <div key={item.id} >
                    <div className='checkout-item'><strong>{item.title}</strong>{' '}x{item.num}</div>
                    <div className='checkout-quantity'>
                      Price: {item.num} x ${item.unitPrice.toFixed(2)}
                    </div>
                  </div>
                ))}
                <div className='cart-sum-title'><h4>Cart Summary</h4></div>
                <div className='subtotal'><strong>Subtotal: </strong>${cartsubtotal.toFixed(2)}</div>
                <div className='tax'><strong>Tax: </strong>${carttax.toFixed(2)}</div>
                <div className='shipping'><strong>Shipping: </strong>${cartshipping.toFixed(2)}</div>
                <div className='total'><strong>Total: </strong>${carttotal.toFixed(2)}</div>
                <div className='checkout'>
                  <button className='checkout-btn'
                    onClick={() => alert("items checked out")}>Checkout</button>
                </div>
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  )
}

export default Cart