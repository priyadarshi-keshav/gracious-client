import React from 'react'
import { Fragment } from 'react'
import SubHeader from './SubHeader'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Contact = () => {

    const style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        // backgroundColor: 'beige',
        height: '100vh'
    }

    return (
        <Fragment>
            <SubHeader />
            <div style={style}>
                <div className='container' style={{ width: '70%', marginTop: '60px' }}>

                    <h1 className='heading'>Contact Us</h1>
                    <h5>
                        If you have any questions about orders, sizes, new collections, be sure you check out our FAQ page. If your question wasn't answered there, or you want to join our team ? Don't hesitate to drop us a mail.
                    </h5>
                    {/* <Row>
                        <Col md={5}>
                            <center><img src="/photos/contactUs.png" /></center>
                        </Col>
                    </Row> */}
                    <Row>
                        <Col>
                            <Link>
                                <i style={{ fontSize: '5em', color: '#3db997' }} className="fas fa-map-marker-alt"></i>
                            </Link>
                            <br /> 
                            <h5>Ranchi, Jharkhand, India</h5>
                        </Col>

                        <Col>
                            <Link>
                                <i style={{ fontSize: '5em', color: '#3db997' }} className="fas fa-envelope"></i>
                            </Link>
                            <br />
                            <a style={{ color: 'black' }} href={`mailto:support@graciousmade.in`}> <h5>support@graciousmade.in</h5></a>

                        </Col>

                    </Row>
                </div>
            </div>
        </Fragment>
    )
}

export default Contact
