import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../styles/Checkout.css'
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

function Checkout() {

    //existing addresses
    const [address, setAddress] = useState([])
    //for adding new address
    const [addAddress, setNewAddress] = useState()
    const loadAddress = async () => {
        const res = await axios.get("http://localhost:8080/address/getAllAddressByCid")
        setAddress(res.data.data)
    }

    //all states from db
    const [states, setStates] = useState([])
    //selected state
    const [state, setState] = useState()
    const loadState = async () => {
        const res = await axios.get("http://localhost:8080/address/selectAllStates")
        setStates(res.data.data)
    }

    //all citites based on state selection
    const [cities, setCities] = useState([])
    //selected city
    const [city, setCity] = useState()
    const loadCity = async (code) => {
        const res = await axios.get(`http://localhost:8080/address/selectCitiesBaseOnState?code=${code}`)
        setCities(res.data.data)
    }

    //modal for new address entries
    const [modal, setModal] = useState(false);
    const handleClose = () => setModal(false);
    function newAddress(e) {
        if (e.target.value === "new-address") {
            setModal(true)
        }
    }

    //new address parameters
    const [name, setName] = useState([])
    const [apartment, setApartment] = useState([])
    const [zip, setZip] = useState([])
    const [phone, setPhone] = useState([])

    const userAddress = async (name, address, apartment, zip, phone, state, city) => {
        await axios.post(`http://localhost:8080/address/addNewAddress?name=${name}&address=${address}
        &apartment=${apartment}&zip=${zip}&phone=${phone}&state=${state}&city=${city}`)
    }

    useEffect(() => {
        loadAddress();
    }, [])

    return (
        <div>
            <h2 className='pt-5'>CHECKOUT</h2>

            <div className='checkout-container'>

                <div className='contact-info p-4'>
                    <h4>Name: </h4><input type='text'></input>
                </div>
                <div className='shipping-address p-4'>
                    <h4>Shipping Address</h4>
                    <select onChange={(e) => newAddress(e)}>
                        <option>Select an Address</option>
                        {address.map((item) => (
                            <option key={item.aid}>
                                {item.address} {item.apartment} {item.city}, {item.state}, {item.zip}
                            </option>
                        ))}
                        <option value="new-address">
                            Add New Address
                        </option>
                    </select>

                </div>

                <div className='checkout-info p-4'>
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
                                <td>dress</td>
                                <td>$25</td>
                                <td>1</td>
                                <td>$25</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div className='payment-btn'>
                    <button className='proceed-payment'>
                        Proceed to Payment
                    </button>
                </div>

                <Modal
                    show={modal}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>New Address</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className='mb-1'>
                                Name <input type='text' onChange={e => setName(e.target.value)}></input>
                            </div>
                            <div className='mb-1'>
                                State {' '}
                                <select value={loadState()} onChange={(e) => setState(e.target.value.slice(0, 2))}>
                                    <option>{state}</option>
                                    {states.map((state) => (
                                        <option key={state.sid}>
                                            {state.code}, {state.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className='mb-1'>
                                City {' '}
                                <select value={loadCity(state)} onChange={(e) => setCity(e.target.value)}>
                                    <option>{city}</option>
                                    {cities.map((city) => (
                                        <option key={city.cid}>
                                            {city.cityName}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className='mb-1'>
                                Address: <input type='text' onChange={(e) => setNewAddress(e.target.value)}></input>
                            </div>

                            <div className='mb-1'>
                                Apartment: {' '}
                                <input type='text' placeholder='(optional)' onChange={(e) => setApartment(e.target.value)}></input>
                            </div>

                            <div className='mb-1'>
                                Zip Code: <input type='text' onChange={(e) => setZip(e.target.value)}></input>
                            </div>

                            <div className='mb-1'>
                                Phone: <input type='text' onChange={(e) => setPhone(e.target.value)}></input>
                            </div>

                            <button
                                className='add-new-address-btn'
                                onClick={() => userAddress(name, addAddress, apartment, zip, phone, state, city)}>
                                Add
                            </button>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={handleClose} className='close-modal'>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>

            </div>
        </div>
    )
}

export default Checkout