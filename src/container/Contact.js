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
        height: '100vh'
    }

    return (
        <Fragment>
            <SubHeader />
            <div style={style}>
                <div className='container' style={{ marginTop: '60px' }}>

                    <Row  className="justify-content-md-center">
                        <Col md={8}>
                            <h1 className='heading'>Contact Us</h1>
                            <p>
                                If you have any questions about orders, sizes, new collections, be sure you check out our FAQ page. If your question wasn't answered there, or you want to join our team ? Don't hesitate to drop us a mail.
                            </p>
                        </Col>
                    </Row>

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
