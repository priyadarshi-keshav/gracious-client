import React, { Fragment, useEffect, useState } from 'react'
import { Form, Container, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Message from '../Extras/Message'
import CheckoutNav from './CheckoutNav'
import SubHeader from './SubHeader'
import { razorPayPayment } from '../action/razorpayAction'
import { emptyAuthCart, emptyCartDB } from '../action/AuthCartAction'

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { emptyCart, resetOrderNoteMessage, saveGiftWrapAmount, saveGiftWrapSuccess, saveOrderNote } from '../action/CartAction'




const PlaceOrder = ({ history }) => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.Cart)
    const { shippingAddress, paymentMethod, giftWrap, giftWrapSuccess, orderNoteSuccess, orderNote } = cart
    const authcart = useSelector(state => state.AuthCart)
    const { authCartItems } = authcart
    const { profile } = useSelector(state => state.UserLogin)
    const { loading, order, success, error } = useSelector(state => state.PlaceOrder)
    const [ordernote, setOrdernote] = useState('')

    useEffect(async () => {
        if (!profile) {
            history.push('/login')
        }
        if (authCartItems.length <= 0) {
            history.push('/cart')
        }
        if (success) {
            await dispatch(emptyAuthCart())
            await dispatch(emptyCartDB())
            await dispatch(emptyCart())
            history.push('/order_placed')
        }
    }, [history, profile, success])

    useEffect(() => {
        if (giftWrapSuccess) {
            dispatch(saveGiftWrapAmount(20))
        }
        if (!giftWrapSuccess) {
            dispatch(saveGiftWrapAmount(null))
        }
        if (orderNoteSuccess) {
            setTimeout(() => {
                dispatch(resetOrderNoteMessage())
            }, 5000);
        }

    }, [orderNoteSuccess, giftWrapSuccess])


    if (authCartItems.length > 0) {

        authcart.itemsPrice = authCartItems.map(item => item.price * item.quantity_selected).reduce((total, price) => total + price)

        authcart.deliveryPrice = authcart.itemsPrice > 499 ? 0 : 75

        authcart.totalPrice = authcart.itemsPrice + authcart.deliveryPrice + giftWrap

    }

    const placeOrderHandler = () => {
        dispatch(razorPayPayment())
    }
    const addNoteHandler = (e) => {
        e.preventDefault();
        dispatch(saveOrderNote(ordernote));
        const form = document.getElementById("myForm")
        form.reset()
    }

    return (
        <Fragment>
            <SubHeader />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Container>
                <Row className="justify-content-md-center">
                    <CheckoutNav process1 process2 process3 />
                    <Row>

                        <Col md={12}>
                            <ListGroup variant='flush'>
                                {error && <Message variant='danger'>{error}</Message>}
                                <ListGroup.Item>
                                    <p className='subheading'>Shipping Address</p>
                                    {shippingAddress ?
                                        <p>
                                            {shippingAddress.name}, <br />
                                            {shippingAddress.address}, <br />
                                            {shippingAddress.locality}, <br />
                                            {shippingAddress.city}, {shippingAddress.state},<br />
                                            {shippingAddress.pincode}, <br />
                                            {shippingAddress.mobile}
                                        </p>
                                        : null
                                    }
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <p className='subheading'>Payment Method</p>
                                    {
                                        paymentMethod ?
                                            <p>
                                                {paymentMethod}
                                            </p>
                                            : null
                                    }
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <p className='subheading'>Product List</p>
                                    {authCartItems.length === 0 ? <Message variant='danger'>Cart is empty</Message> : (
                                        <ListGroup variant='flush'>
                                            {authCartItems.map((item, idx) => {
                                                return <ListGroup.Item key={idx}>
                                                    <Row>
                                                        <Col xs={3} sm={3} md={2} lg={2}>
                                                            <Link to={`/product_details/${item.product_id}`}>
                                                                <Image src={item.image} alt={item.name} fluid rounded />
                                                            </Link>
                                                        </Col>
                                                        <Col xs={4} sm={5} md={5} lg={5}>
                                                            <Link style={{ color: 'black' }} to={`/product_details/${item.product_id}`}>
                                                                {item.name}
                                                            </Link>
                                                        </Col>
                                                        <Col xs={5} sm={4} md={5} lg={5}>
                                                            {item.quantity_selected} x ₹ {item.price} = ₹ {item.quantity_selected * item.price}
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            })}
                                        </ListGroup>
                                    )}
                                </ListGroup.Item>

                                {
                                    orderNote ?
                                        <ListGroup.Item>
                                            <p className='subheading'>Order Message</p>
                                            <p>
                                                {orderNote}
                                            </p>
                                        </ListGroup.Item>
                                        : null
                                }

                            </ListGroup>
                        </Col>

                        <Col md={6} style={{ margin: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                            {orderNoteSuccess && <Message variant="success">Order message added</Message>}

                            <Form id="myForm" onSubmit={addNoteHandler}>
                                <Form.Group><i class="far fa-comment-dots"></i> Add Order Message
                                    <textarea rows="2" className='form-control input-fill' name="description" onChange={(e) => {
                                        setOrdernote(e.target.value)
                                    }} required></textarea>
                                    <button className="page_btn" type="submit">Add</button>
                                </Form.Group>
                            </Form>


                            <Card className="text-center">

                                <Card.Header>
                                    <i style={{ color: 'rgba(213 130 170)', fontSize: '1.5em' }} className="fas fa-gifts"></i> <FormControlLabel
                                        selected
                                        control={<Checkbox checked={giftWrapSuccess} color="primary" />}
                                        label="gift wrap"
                                        onClick={() => {
                                            if (giftWrapSuccess) {
                                                dispatch(saveGiftWrapSuccess(false))
                                            }
                                            else {
                                                dispatch(saveGiftWrapSuccess(true))
                                            }
                                        }
                                        }
                                    />
                                </Card.Header>

                                <Card.Body>

                                    <ListGroup variant='flush'>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Item Price</Col>
                                                <Col>₹ {authcart.itemsPrice}</Col>
                                            </Row>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Delivery</Col>
                                                <Col>₹ {authcart.deliveryPrice}</Col>
                                            </Row>
                                        </ListGroup.Item>

                                        {giftWrapSuccess &&
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Gift wrap</Col>
                                                    <Col>₹ {giftWrap}</Col>
                                                </Row>
                                            </ListGroup.Item>}

                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Total Price</Col>
                                                <Col>₹ {authcart.totalPrice}</Col>
                                            </Row>
                                        </ListGroup.Item>


                                    </ListGroup>

                                    <button
                                        className="page_btn"
                                        onClick={placeOrderHandler}
                                        disabled={authCartItems.length === 0}
                                    >
                                        Pay with RazorPay
                                    </button>

                                </Card.Body>

                            </Card>

                        </Col>
                    </Row>

                </Row>
            </Container>

        </Fragment>
    )
}

export default PlaceOrder
