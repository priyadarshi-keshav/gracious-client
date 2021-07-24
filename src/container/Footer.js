import React, { Fragment } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import NavigationIcon from '@material-ui/icons/Navigation';
import '../assets/css/footer.css'

const Footer = () => {
    return (


        <div className='main_footer'>
            <div className='footer'>
                <Col>
                    <p>Follow Us</p>
                    <div className='socialIcons'>
                        <a href="https://www.instagram.com/gracious_by_pooja/" target="blank" className="social">
                            <i style={{ fontSize: '2em' }} className="fa fa-instagram"></i>
                        </a>
                    </div>
                    <hr />
                </Col>
                <Row className='redirect'>
                    <Link to="/" ><span>HOME</span></Link>
                    <Link to="/all_products"><span>SHOP</span></Link>
                    <Link to="/under_development"><span>FAQs</span></Link>
                    <Link to="/contact"><span>CONTACT US</span></Link>
                    <Link to="/aboutus"><span>ABOUT US</span></Link>
                    <HashLink to="#"><NavigationIcon /></HashLink>
                </Row>

                <Col className='companyLogo'>
                    <img style={{ width: '15%' }} src="/photos/logo.png" alt="logo" />
                </Col>

                <Col className='copyright'>
                    <center><h6>Copyright &#169; graciousmade.in 2021 | All rights reserved</h6> </center>
                    <div style={{ float: 'right', fontSize:'2em' }}>
                        <i className="fab fa-cc-visa"></i> <i className="fas fa-credit-card"></i> <i className="fab fa-cc-discover"></i> <i className="fab fa-google-pay"></i> <i className="fab fa-cc-mastercard"></i>
                    </div>
                </Col>
            </div>
        </div>

    )
}

export default Footer







