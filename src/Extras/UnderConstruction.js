import React, { Fragment } from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UnderConstruction = () => {
    const style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'beige',
        height: '100vh'
    }
    return (
        <div style={style}>
            <i style={{ fontSize: '5em', color: 'rgba(213 130 170)' }} className="far fa-frown"></i>

            <h2>FAQs section is under development!</h2>
            <p>Soon it will update. Thank you</p>
            <Link to="/all_products">
                <button className='page_btn'>Continue Shopping</button>
            </Link>
        </div>
    )

}

export default UnderConstruction
