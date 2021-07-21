import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
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
           <i style={{fontSize:'5em', color:'rgba(213 130 170)'}} className="far fa-frown"></i>
           
            <h2>Your Cart is Empty</h2>
            <p>Add something to make me happy :)</p>
            <Link to="/all_products">
                <button className='page_btn'>Continue Shopping</button>
            </Link>
        </div>
    )
}


export default EmptyCart
