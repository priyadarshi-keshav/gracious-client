import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getNewArrivalProducts } from '../action/productAction'
import Loader from '../Extras/Loader'


const OurProduct = () => {

    const dispatch = useDispatch()
    const { newArrivalLoading, newArrivalProducts } = useSelector(state => state.NewArrivalProduct)
    const [width, setWidth] = useState('18em')

    const updateCardWidth = () => {
        if (window.innerWidth <= 500) {
            setWidth('10em')
        } else {
            setWidth('18em')
        }
    }

    useEffect(() => {
        dispatch(getNewArrivalProducts())
        window.addEventListener('resize', updateCardWidth)
        return () => {
            window.removeEventListener('resize', updateCardWidth)
        }
    }, [dispatch])


    return (
        <Fragment>
            <Col className="justify-content-md-center text-center" data-aos="fade-up" style={{ padding: '20px', textTransform: 'uppercase' }} data-aos-delay="400" >
                <center><p className='heading'>{newArrivalProducts.length > 0 && 'New Collection'}</p></center>
                {newArrivalLoading ? <Loader /> :
                    <>
                        <Row>
                            {
                                newArrivalProducts && newArrivalProducts.map((items, idx) => {
                                    if (idx + 1 <= 4) {

                                        return (
                                            <Col xs={6} sm={6} md={6} lg={3} className='overflow category_block1' key={items._id}>
                                                <Card variant='flush' className="border-0 text-center" style={{ lineHeight: '1em', width: { width }, overflow: 'hidden' }}>
                                                    <Link to={`/product_details/${items._id}`}>
                                                        <Card.Img variant="top" src={items.image} />
                                                    </Link>
                                                    <p style={{ position: 'absolute', top: '0', right: '0', background: 'rgba(213 130 170)', padding: '5px' }}>New</p>

                                                    <Card.Body>
                                                        <Card.Text>{items.name}</Card.Text>
                                                        <Card.Text>Pack of {items.product_details && items.product_details.items_in_pack}</Card.Text>
                                                        {
                                                            items.offerprice ?
                                                                <Card.Text>
                                                                    ₹ {items.offerprice}
                                                                    <span style={{ textDecoration: 'line-through' }}>₹ {items.price}</span>
                                                                    <p style={{ color: 'green' }}>
                                                                        {
                                                                            Math.round((items.price - items.offerprice) / items.price * 100)
                                                                        }% off
                                                                    </p>

                                                                </Card.Text>
                                                                :
                                                                <Card.Text> ₹ {items.price}</Card.Text>
                                                        }
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        )
                                    }
                                })
                            }
                        </Row>
                        <Link to='/newcollection'>
                            {
                                newArrivalProducts.length > 0 &&
                                <i style={{ fontSize: '3em', color: 'beige', background: 'rgba(213 130 170)', padding: '5px' }} className="fas fa-chevron-right"></i>
                            }
                        </Link>
                    </>
                }
            </Col>
        </Fragment>
    )
}


export default OurProduct
