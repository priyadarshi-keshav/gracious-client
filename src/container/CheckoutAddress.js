import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Form } from 'react-bootstrap'
import SubHeader from './SubHeader'
import { saveShippingAddress } from '../action/CartAction'
import CheckoutNav from './CheckoutNav'

const CheckoutAddress = ({ history }) => {

    const dispatch = useDispatch()
    const shippingAddress = useSelector(state => state.Cart.shippingAddress)
    const { profile } = useSelector(state => state.UserLogin)
    const { authCartItems } = useSelector(state => state.AuthCart)

    const [address, setAddress] = useState({})
    const [pincodeError, setPincodeError] = useState('')


    useEffect(() => {
        if (!profile) {
            history.push('/login')
        }
        if (authCartItems.length <= 0) {
            history.push('/cart')
        }
        if (shippingAddress !== null) {
            setAddress(shippingAddress)
        }
    }, [shippingAddress, profile, history])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress(address))
        history.push('/payment')
    }

    const handleChange = (e) => {
        setAddress(address => ({ ...address, [e.target.name]: e.target.value }))
    }
    const pincodeHandler = (e) => {
        setAddress(address => ({ ...address, [e.target.name]: e.target.value }))

        fetch(`https://api.postalpincode.in/pincode/${e.target.value}`)
            .then(data => data.json())
            .then(data => {
                if (data[0].Status === "Success") {
                    setPincodeError('')
                    setAddress(address => ({
                        ...address,
                        city: data[0].PostOffice && data[0].PostOffice[0].District,
                        state: data[0].PostOffice && data[0].PostOffice[0].State
                    })
                    )
                }
                if (data[0].Status === "Error") {
                    setPincodeError('Not a valid pincode')
                }
            })
    }

    return (
        <Fragment>
            <SubHeader />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Container style={{ padding: '34px' }}>
                <Row className="justify-content-md-center">
                    <CheckoutNav process1 />
                    <Col md={8}>
                        <p className='subheading'>Shipping Address</p>
                        <Form onSubmit={submitHandler}>

                            <Row>
                                <Col>
                                    <Form.Group>
                                        <small>Name*</small>
                                        <Form.Control required defaultValue={address.name} name='name' placeholder='Name' type='text' onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <small>Phone no.*</small>
                                        <Form.Control required defaultValue={address.mobile} name='mobile' placeholder='10-digit mobile number' type='number' onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group>
                                        <small>Address(Area and Street)*</small>
                                        <Form.Control required defaultValue={address.address} as='textarea' name='address' placeholder='Address(Area and Street)' onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <small>Locality*</small>
                                        <Form.Control required defaultValue={address.locality} name='locality' placeholder='Locality' type='text' onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <small>Pincode*</small>
                                        <Form.Control required defaultValue={address.pincode} name='pincode' placeholder='Pincode' type='number' onChange={pincodeHandler} />
                                        <small style={{ color: 'red' }}>{pincodeError}</small>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>

                                <Col><Form.Group>
                                    <small>District*</small>
                                    <Form.Control required defaultValue={address.city} name='city' placeholder='City' type='text' onChange={handleChange} disabled /></Form.Group></Col>
                                <Col><Form.Group>
                                    <small>State*</small>
                                    <Form.Control required defaultValue={address.state} name='state' placeholder='State' type='text' onChange={handleChange} disabled /></Form.Group></Col>
                            </Row>

                            <button className='page_btn' >Save and Proceed</button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default CheckoutAddress
