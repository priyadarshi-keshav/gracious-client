import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CheckoutNav = ({ process1, process2, process3 }) => {
    return (
        <Col md={8}>
            <Row style={{ marginBottom: '30px' }}>
                <Col xs={4} sm={4} md={4} lg={4}>
                    {
                        process1 ? <Link style={{color:'rgba(213 130 170)'}} to='/checkout_address'>ADDRESS |</Link>
                            :
                            <p style={{ color: 'grey' }}>ADDRESS |</p>
                    }
                </Col>
                <Col xs={4} sm={4} md={4} lg={4}>
                    {
                        process2 ? <Link style={{color:'rgba(213 130 170)'}} to='/payment'>PAY METHOD |</Link>
                            :
                            <p style={{ color: 'grey' }}>PAY METHOD |</p>
                    }
                </Col>
                <Col xs={4} sm={4} md={4} lg={4}>
                    {
                        process3 ? <Link style={{color:'rgba(213 130 170)'}} to='/place_order'>PAYMENT |</Link>
                            :
                            <p style={{ color: 'grey' }}>PAYMENT |</p>
                    }
                </Col>

            </Row>
        </Col>

    )
}

export default CheckoutNav
