import React from 'react'
import '../styles/Brands.css'
import { Link } from 'react-router-dom'
import Nike from '../logo/nikelogo.jpeg'
import Addidas from '../logo/addidaslogo.png'
import Gucci from '../logo/Gucci.jpeg'
import Prada from '../logo/pradalogo.jpeg'
import Supreme from '../logo/Supreme_Logo.png'

function Brands() {
    return (
        <>
            <div className='brands-title'><h1>Brands</h1></div>
            <div className='brands-container'>
                <div className='brands-card'>
                    <Link to='https://www.nike.com'>
                        <img src={Nike} alt='nike logo' className='brands-card2' style={{ width: 100, height: 100 }} />
                    </Link>
                </div>
                <div className='brands-card'>
                    <Link to='https://www.adidas.com/us'>
                        <img src={Addidas} alt='addidas logo' className='brands-card2' style={{ width: 130, height: 100 }} />
                    </Link>
                </div>
                <div className='brands-card'>
                    <Link to='https://www.gucci.com/us/en/'>
                        <img src={Gucci} alt='gucci logo' className='brands-card2' style={{ width: 140, height: 100 }} />
                    </Link>
                </div>
                <div className='brands-card'>
                    <Link to='https://www.prada.com/us/en.html'>
                        <img src={Prada} alt='prada logo' className='brands-card2' style={{ width: 130, height: 100 }} />
                    </Link>
                </div>
                <div className='brands-card'>
                    <Link to='https://us.supreme.com'>
                        <img src={Supreme} alt='supreme logo' className='brands-card2' style={{ width: 270, height: 100 }} />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Brands