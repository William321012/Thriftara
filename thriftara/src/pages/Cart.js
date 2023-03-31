import React from 'react'
import '../styles/Cart.css'
// import { BsTrash } from 'react-icons/bs'

function Cart(props) {

  //data and functions
  const { cartItems, addToCart, removeFromCart } = props;
  //price calculations a(accumulator) c(current item)
  const subtotal = cartItems.reduce((a, c) => a + c.unitPrice * c.qty, 0)
  const tax = subtotal * .0852;
  //free shipping for orders over $75 else $10
  const shipping = subtotal > 75 ? 0 : 10;
  const total = subtotal + tax + shipping;

  return (
    <div className='cart-page-container'>
      <h2>Shopping Cart</h2>
      <div className='cart-empty'>
        {cartItems.length === 0 && <h4>Shopping Cart is Empty</h4>}
      </div>
      <div className='cart-items-mapping'>
        {cartItems.map((item) => (
          <div key={item.id}>
            <div><h6>{item.title}</h6></div>
            <div><img src={item.image} alt={item.title} className='cart-item-img'/></div>
            <div>
              <button onClick={() => addToCart(item)}>+</button>
              {item.qty}
              <button onClick={() => removeFromCart(item)}>-</button>
            </div>
            <div>
              {item.qty} x ${item.unitPrice.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <div className='checkout-summary'>
        {cartItems.length !== 0 && (
          <>
            <div className='subtotal'><strong>Subtotal: </strong>${subtotal.toFixed(2)}</div>
            <div className='tax'><strong>Tax: </strong>${tax.toFixed(2)}</div>
            <div className='shipping'><strong>Shipping: </strong>${shipping.toFixed(2)}</div>
            <div className='total'><strong>Total: </strong>${total.toFixed(2)}</div>
            <div className='checkout'>
              <button className='checkout-btn'
                onClick={() => alert("items checked out")}>Checkout</button>
            </div>
          </>
        )}
      </div>
      {/* <div className='remove-cart-btn'>
        <BsTrash />
      </div> */}
    </div>
  )
}

export default Cart