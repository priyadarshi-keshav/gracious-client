import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderDetails, updateDeliveryStatus } from '../action/orderAction'
import Message from '../Extras/Message'
import Loader from '../Extras/Loader'
import SubHeader from './SubHeader'


const OrderDetails = ({ history, match }) => {

    const dispatch = useDispatch()
    const { profile } = useSelector(state => state.UserLogin)
    const { orderDetails, loading, error } = useSelector(state => state.OrderDetails)
    const { deliveryLoading, delivered } = useSelector(state => state.UpdateDeliveryStatus)


    useEffect(() => {
        if (!profile) {
            history.push('/login')
        }
        else {
            const orderId = match.params.id
            dispatch(getOrderDetails(orderId))
        }
    }, [history, profile, match, delivered])


    return (
        <Fragment>
            <SubHeader />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Container>
                <p onClick={() => history.goBack()} style={{ cursor: 'pointer' }}>
                    <i className="fas fa-chevron-left"></i>  Back
                </p>
                <center>
                    <p className='heading'>Order Details</p>
                    <hr />
                </center>
                <Row className="justify-content-md-center">
                    <Col>
                        {loading && <Loader />}
                        {error && <Message variant='danger'>{error}</Message>}


                        {orderDetails &&
                            <Row>
                                <Col md={8}>
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item>
                                            Order ID : {orderDetails.order_id}<br />
                                            Payment ID : {orderDetails.paymentResult.razorpay_payment_id}<br />
                                            Created : {orderDetails.createdAt.substring(0, 10)}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <p className='subheading'>Product List</p>

                                            <ListGroup variant='flush'>
                                                {orderDetails.orderItems.map((item, idx) => {
                                                    return <ListGroup.Item key={item._id}>
                                                        <Row>
                                                            <Col md={2}>
                                                                <Link to={`/product_details/${item.product_id}`}>
                                                                    <Image width={100} height={100} src={item.image} alt={item.name} fluid rounded />
                                                                </Link>
                                                            </Col>
                                                            <Col md={6}>
                                                                <Link style={{ color: 'black' }} to={`/product_details/${item.product_id}`}>
                                                                    <h5>{item.name}</h5>
                                                                </Link>
                                                            </Col>

                                                            <Col md={4}>
                                                                ₹ {item.price} x {item.quantity_selected} = ₹ {item.quantity_selected * item.price}
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                })}
                                            </ListGroup>

                                        </ListGroup.Item>

                                        {
                                            orderDetails.orderNote ?
                                            <ListGroup.Item>
                                                <p className='subheading'>Order Note</p>

                                                <p>
                                                    {orderDetails.orderNote}
                                                </p>
                                            </ListGroup.Item>
                                            :null
                                        }

                                        <ListGroup.Item>
                                            <p className='subheading'>Shipping Address</p>
                                            {
                                                orderDetails.shippingAddress &&
                                                <p>
                                                    {orderDetails.shippingAddress.name}, {orderDetails.shippingAddress.address}, {orderDetails.shippingAddress.locality}, {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state}, {orderDetails.shippingAddress.pincode}, {orderDetails.shippingAddress.mobile}
                                                </p>
                                            }
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <p className='subheading'>Transaction Details</p>
                                            {/* <p>{orderDetails.paymentMethod}</p> */}
                                            <p>Method : {orderDetails.paymentResult.method}</p>
                                            {
                                                orderDetails.paymentResult.method === 'upi' ?
                                                    <>
                                                        <p>vpa : {orderDetails.paymentResult.vpa}</p>
                                                        <p>Email : {orderDetails.paymentResult.email}</p>
                                                        <p>Contact : {orderDetails.paymentResult.contact}</p>
                                                    </>
                                                    :
                                                    <>
                                                        <p>Email : {orderDetails.paymentResult.email}</p>
                                                        <p>Contact : {orderDetails.paymentResult.contact}</p>
                                                    </>
                                            }
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>

                                <Col md={4}>

                                    <Card className="text-center">

                                        <Card.Header>
                                            Payment Details
                                        </Card.Header>

                                        <Card.Body>

                                            <ListGroup variant='flush'>
                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col>Item Price</Col>
                                                        <Col>₹ {orderDetails.itemsPrice}</Col>
                                                    </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col>Delivery</Col>
                                                        <Col>₹ {orderDetails.deliveryPrice}</Col>
                                                    </Row>
                                                </ListGroup.Item>

                                                {orderDetails.giftWrap ?
                                                    < ListGroup.Item >
                                                        <Row>
                                                            <Col>Gift wrap</Col>
                                                            <Col>₹ {orderDetails.giftWrap && orderDetails.giftWrap}</Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                    :null
                                                }

                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col>Paid Amount</Col>
                                                        <Col>₹ {orderDetails.totalPrice}</Col>
                                                    </Row>
                                                </ListGroup.Item>


                                            </ListGroup>

                                        </Card.Body>

                                        <Card.Header>
                                            Delivery Status
                                        </Card.Header>
                                        <Card.Body>
                                            <ListGroup.Item>
                                                {
                                                    profile.role === 'admin' && orderDetails.isDelivered === false ?
                                                        <>
                                                            <div>
                                                                <p style={{ color: 'red' }}>NOT DELIVERED</p>
                                                                <p>We'll send you a shipping confrmation on your given details as soon as your order ships.</p>
                                                            </div>
                                                            <small>Click below to change the status</small>
                                                            <button
                                                                onClick={() => {
                                                                    const confirm = window.confirm('Are you sure to change the delivery status to delivered.')
                                                                    if (confirm) {
                                                                        dispatch(updateDeliveryStatus(orderDetails._id))
                                                                    }

                                                                }}
                                                                className="page_btn">Delivered</button>
                                                        </>
                                                        :
                                                        orderDetails.isDelivered === false ?
                                                            <div>
                                                                <p style={{ color: 'red' }}>NOT DELIVERED</p>
                                                                <p>We'll send you a shipping confrmation on your given details as soon as your order ships.</p>
                                                            </div>
                                                            :
                                                            <>
                                                                <p style={{ color: 'green' }}>Delivered On</p>
                                                                <p>{orderDetails.deliveredAt.substring(0, 10)}</p>
                                                            </>
                                                }
                                            </ListGroup.Item>
                                        </Card.Body>
                                        {!orderDetails.isDelivered &&
                                            <>
                                                <Card.Header>
                                                    Issue with your order! Mail Us
                                                </Card.Header>
                                                <Card.Body>
                                                    {/* <p className='form-control' disabled>update soon</p> */}
                                                    <a style={{ color: 'black' }} href={`mailto:support@graciousmade.in`}>support@graciousmade.in</a>
                                                </Card.Body>
                                            </>
                                        }

                                    </Card>
                                </Col>

                            </Row>
                        }
                    </Col>
                </Row>
            </Container>

        </Fragment >
    )
}

export default OrderDetails
