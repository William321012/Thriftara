import React from 'react'
import '../styles/Cart.css'
import { BsTrash } from 'react-icons/bs'

function Cart(props) {

  //data and functions
  const { cartItems, addToCart, removeFromCart, removeItemFromCart } = props;
  //price calculations a(accumulator) c(current item)
  const subtotal = cartItems.reduce((a, c) => a + c.unitPrice * c.qty, 0)
  const tax = subtotal * .0852;
  //free shipping for orders over $75 else $10
  const shipping = subtotal > 75 ? 0 : 10;
  const total = subtotal + tax + shipping;

  return (
    <div>
      <h2 className='cart-title'>Shopping Cart</h2>
      <div className='cart-page-container'>
        <div className='cart-empty'>
          {cartItems.length === 0 && <h4>Shopping Cart is Empty... Add
            Items to Cart</h4>}
        </div>
        <div className='cart-items-mapping'>
          {cartItems.map((item) => (
            <div key={item.id} className='cart-items'>
              <img src={item.image} alt={item.title} className='cart-item-img' />
              <div><h5>{item.title}</h5></div>
              <div className='cart-quantity'>
                Quantity:{' '}
                <button onClick={() => removeFromCart(item)} className='minus-qty'>-</button>
                {item.qty}
                <button onClick={() => addToCart(item)} className='add-qty'>+</button>
                <br></br>
                Price:{' '}
                {item.qty} x ${item.unitPrice.toFixed(2)}
              </div>
              <div className='remove-cart-btn'>
                <BsTrash size={20} onClick={() => removeItemFromCart(item)} />
              </div>
            </div>
          ))}
        </div>
        <div className='cart-checkout-summary'>
          {cartItems.length !== 0 && (
            <>
              <div className='checkout-summary'>
                <h5><b>Items in Cart</b></h5>
                {cartItems.map((item) => (
                  <div key={item.id} >
                    <div className='checkout-item'><strong>{item.title}</strong></div>
                    <div className='checkout-quantity'>
                      Quantity:{' '}
                      {item.qty}
                      <br></br>
                      Price:{' '}
                      ${(item.qty * item.unitPrice).toFixed(2)}
                    </div>
                  </div>
                ))}
                <div className='cart-sum-title'><h3>Cart Summary</h3></div>
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
        </div>
      </div>
    </div>
  )
}

export default Cart