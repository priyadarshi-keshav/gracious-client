import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import "../assets/css/subheader.css"
import '../assets/css/header.css'
import { withRouter } from 'react-router-dom'

const SubHeader = (props) => {

    const [bgcolor, setBgColor] = useState("")
    const [textColor, setTextColor] = useState("")
    const [shadow, setShadow] = useState("")

    const { cartItems } = useSelector(state => state.Cart)
    const { authCartItems } = useSelector(state => state.AuthCart)

    const scrollEventListen = (e) => {
        if (window.scrollY > 80) {
            setBgColor("white")
            setShadow("0px 1px 5px grey")
        }
        else {
            setBgColor("")
            setShadow("")
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollEventListen)
        return () => {
            window.removeEventListener('scroll', scrollEventListen)
        }
    }, [window.scroll])

    return (
        <header style={{ backgroundColor: `${bgcolor}`, boxShadow: `${shadow}` }}>
            <center style={{ backgroundColor: 'rgba(213 130 170)' }}>FREE PREPAID SHIPPING ABOVE ₹ 499</center>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light" >

                    <div className='viewChange'>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <Link to="/">
                            {/* <p style={{ marginTop: '5px', fontSize: '2em', color: 'rgba(213 130 170)' }}>GraCiousMade</p> */}
                            <img style={{ width: '50%' }} src="/photos/logo.png" alt="logo" />
                        </Link>
                        <div>
                            <Link style={{ color: '#3db997' }} className="mobile cartIcon nav-link" to="/cart">
                                <i className="fab fa-opencart"></i>
                                <small className='cartNum'>{authCartItems.length !== 0 ? authCartItems.length : cartItems.length}</small>
                            </Link>

                            <Link style={{ color: 'black' }} className="mobile cartIcon nav-link" to="/profile">
                                <i className="far fa-user"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-lg-auto">

                            <li className="nav-item nav-hover">
                                <Link style={{ color: 'black' }} className="nav-link" to="/all_products">Shop</Link>
                            </li>
                            <li className="nav-item nav-hover">
                                <Link style={{ color: 'black' }} className="nav-link" to="/under_development">FAQ</Link>
                            </li>
                            <li className="nav-item nav-hover">
                                <Link style={{ color: 'black' }} className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item nav-hover">
                                <Link style={{ color: 'black' }} className="nav-link" to="/aboutus">AboutUs</Link>
                            </li>

                            <li className="nav-item">
                                <Link style={{ color: 'black' }} className="desktop nav-link" to="/profile" ><i className="far fa-user"></i></Link>
                            </li>

                            <li className="nav-item">
                                <Link style={{ color: 'black' }} className="desktop cartIcon nav-link" to="/cart">
                                    <i className="fab fa-opencart"></i>
                                    <small className='cartNum'>{authCartItems.length !== 0 ? authCartItems.length : cartItems.length}</small>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default withRouter(SubHeader)
