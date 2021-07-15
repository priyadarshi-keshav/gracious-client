import React, { Fragment } from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SubHeader from '../container/SubHeader'

const OrderSuccessful = () => {
    return (
        <Fragment>
            <SubHeader/>
            <br/>
            <br/>
            <br/>
            <Col className="justify-content-md-center text-center" style={{ padding: '20px' }}>
                <p className='heading'>Order successfully placed</p>
                <Image width={500} src='/photos/order-successful.gif' />
                <br/>
                <Link to="/profile#myorders">
                   <button className='page_btn'>VIEW ORDERS</button>
                </Link>
            </Col>
        </Fragment>
    )
}

export default OrderSuccessful
