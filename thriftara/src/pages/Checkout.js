import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

function Checkout() {

    // const [checkoutItem, setCheckoutItems] = useState([])

    // const loadItems = async () => {
    //     const res = await axios.get("http://localhost:8080/carts/list")
    //     console.log(res.data)
    //     setCheckoutItems(res.data)
    // }
    
    const loadAddress = async () => {
        const res = await axios.get("http://localhost:8080/address/getAllAddressByCid")
        console.log(res)
    }

    useEffect(() => {
        loadAddress();
        // loadItems();
      }, [])

    return (
        <div>
            <h2 className='p-4'>CHECKOUT</h2>

            <div>
                Address
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </Table>
            {/* {checkoutItem.map((item) => (
                  <div key={item.id} >
                    <div className='checkout-item'><strong>{item.title}</strong>{' '}x{item.num}</div>
                    <div className='checkout-quantity'>
                      Price: {item.num} x ${item.unitPrice.toFixed(2)}
                    </div>
                  </div>
                ))} */}
        </div>
    )
}

export default Checkout