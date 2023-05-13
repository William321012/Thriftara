import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../styles/Checkout.css'
import Table from 'react-bootstrap/Table';
import Address from '../components/Address/Address';

function Checkout() {

    const [cartDisplay, setCartDisplay] = useState([])
    const cartsubtotal = cartDisplay.reduce((a, c) => a + c.unitPrice * c.num, 0)
    const carttax = cartsubtotal * .0852;
    const cartshipping = cartsubtotal > 75 ? 0 : 10;
    const carttotal = cartsubtotal + carttax + cartshipping;

    const loadCart = async () => {
        const res = await axios.get("http://localhost:8080/carts/display")
        console.log(res.data.data)
        setCartDisplay(res.data.data)
    }

    useEffect(() => {
        loadCart()
    }, [])

    return (
        <div>
            <h2 className='pt-5'>CHECKOUT</h2>

            <div className='checkout-container'>

                <div className='contact-info p-4'>
                    <h4>Name: </h4><input type='text'></input>
                    <h4>Phone: </h4><input type='text'></input>
                </div>

                <Address />

                <div className='checkout-info p-4'>
                    <Table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Unit Price</th>
                                <th>Quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartDisplay.map(item => <tr>
                                <td>{item.title}</td>
                                <td>${item.unitPrice.toFixed(2)}</td>
                                {/* <td>${item.unitPrice}.00</td> */}
                                <td>{item.num}</td>
                                <td></td>
                            </tr>
                            )}
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Subtotal: ${cartsubtotal.toFixed(2)}</td>
                                {/* <td>Subtotal: ${cartsubtotal}.00</td> */}
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Tax: ${carttax.toFixed(2)}</td>
                                {/* <td>Tax: ${carttax}.00</td> */}
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Shipping: ${cartshipping.toFixed(2)}</td>
                                {/* <td>Shipping: ${cartshipping}.00</td> */}
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><strong>Total:</strong> ${carttotal.toFixed(2)}</td>
                                {/* <td><strong>Total:</strong> ${carttotal}.00</td> */}
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div className='payment-btn'>
                    <button className='proceed-payment'>
                        Proceed to Payment
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Checkout