import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Image, Form, Button, Col, Row } from 'react-bootstrap'
import { addToCart, removeFromCart } from '../action/CartAction'
import { getCartProducts, removeFromCartDB, updateQuantityDB } from '../action/AuthCartAction'


const DisCart = ({ cartItems }) => {
    const dispatch = useDispatch()
    const { profile } = useSelector(state => state.UserLogin)
    const { authCartItems } = useSelector(state => state.AuthCart)
    const [cartHeader, setCartHeader] = useState(true)

    const cartHeaderDisplay = () => {
        if (window.innerWidth <= 620) {
            setCartHeader(false)
        } else {
            setCartHeader(true)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', cartHeaderDisplay)
        return () => {
            window.removeEventListener('resize', cartHeaderDisplay)
        }
    }, [])

    const removeItemHandler = async (productData) => {
        if (profile) {
            await dispatch(removeFromCartDB(productData.product_id))
            await dispatch(getCartProducts())
        }
        else {
            dispatch(removeFromCart(productData._id))
        }
    }

    const updateQuantityHandler = async (productData, qty) => {
        if (profile) {
            await dispatch(updateQuantityDB(productData.product_id, qty))
            await dispatch(getCartProducts())
        }
        else {
            dispatch(addToCart(productData, qty))
        }
    }

    const displayCart = (data) => {
        if (data) {
            return data.map(item => {
                return (
                    <Row key={item._id} style={{ paddingBottom: '10px' }}>

                        <Col xs={3} sm={3} md={3} lg={3}>
                            {
                                authCartItems.length > 0 ?
                                    <Link to={`/product_details/${item.product_id}`}>
                                        <Image width={200} height={100} src={item.image} fluid rounded />
                                    </Link>
                                    :
                                    <Link to={`/product_details/${item._id}`}>
                                        <Image width={200} height={100} src={item.image} fluid rounded />
                                    </Link>
                            }
                        </Col>

                        <Col xs={3} sm={3} md={3} lg={3}>
                            {
                                authCartItems.length > 0 ?
                                    <Link style={{ color: 'black' }} to={`/product_details/${item.product_id}`}>
                                        <h5>{item.name}</h5>
                                    </Link>
                                    :
                                    <Link style={{ color: 'black' }} to={`/product_details/${item._id}`}>
                                        <h5>{item.name}</h5>
                                    </Link>
                            }
                            <h5>₹ {item.price}</h5>
                        </Col>

                        <Col xs={4} sm={3} md={3} lg={3}>
                            <Form.Control as='select' value={item.quantity_selected}
                                onChange={(e) => updateQuantityHandler(item, e.target.value)}
                            >
                                {

                                    [...Array(item.quantity_available).keys()].map((num) => (
                                        <option key={num + 1} value={num + 1}>
                                            {num + 1}
                                        </option>
                                    ))
                                }
                            </Form.Control>
                            <br />
                            <Button type="button" variant='light' onClick={() => removeItemHandler(item)}><i className='fas fa-trash' style={{ color: 'orange' }}></i></Button>
                        </Col>

                        {cartHeader ? 
                        <Col xs={3} sm={3} md={3} lg={3}>
                            ₹ {item.price * item.quantity_selected}
                        </Col>
                        :
                        <Col xs={12} sm={3} md={3} lg={3}>
                            Total ₹ {item.price * item.quantity_selected}
                        </Col>}

                    </Row>
                )
            })
        }
    }

    return (
        <div>
            {cartHeader &&
                <>
                    <Row style={{ color: 'grey', width: '100%' }}>
                        <Col xs={6} sm={6} md={6} lg={6}>PRODUCT</Col>
                        <Col xs={4} sm={3} md={3} lg={3}>QUANTITY</Col>
                        <Col xs={3} sm={3} md={3} lg={3}>TOTAL</Col>
                    </Row>
                    <hr></hr>
                </>
            }
            {displayCart(cartItems)}
        </div>
    )
}

export default DisCart
