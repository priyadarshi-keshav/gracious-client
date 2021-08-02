import React, { useState, useEffect }  from 'react'
import { Card, Row, Col } from 'react-bootstrap'

const WhyChooseUs = () => {

    const [width, setWidth] = useState('18em')
    // const [height, setHeight] = useState('')


    const updateCardWidth = () => {
        if(window.innerWidth <= 428){
            setWidth('10em')
            // setHeight('')
        }else{
            setWidth('18em')
            // setHeight('200px')
        }
    }

    useEffect(() => {
        window.addEventListener('resize', updateCardWidth)
        return () => {
            window.removeEventListener('resize', updateCardWidth)
        }
    }, [])

    return (
        <Col className="justify-content-md-center text-center" data-aos="fade-up" style={{ padding: '20px', textTransform: 'uppercase' }} data-aos-delay="400" >
            <center><p className='heading'>Why Us ?</p></center>

                <Row>
                    <Col  xs={6} sm={6} md={6} lg={3} className='overflow category_block1'>

                        <Card variant='flush' className="border-0 text-center" style={{ lineHeight: '1em', width:{width}, overflow: 'hidden' }}>
                            <img variant="top" src='/photos/packing.png' />
                            <Card.Body>
                                <Card.Text>Gift Wrap</Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col  xs={6} sm={6} md={6} lg={3} className='overflow category_block1'>

                        <Card variant='flush' className="border-0 text-center" style={{ lineHeight: '1em', width:{width}, overflow: 'hidden' }}>
                            <img variant="top" src='/photos/quality_product.png' />
                            <Card.Body>
                                <Card.Text>Best Quality Product</Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col  xs={6} sm={6} md={6} lg={3} className='overflow category_block1'>

                        <Card variant='flush' className="border-0 text-center" style={{ lineHeight: '1em', width:{width}, overflow: 'hidden' }}>
                            <img variant="top" src='/photos/safe_payment.png' />
                            <Card.Body>
                                <Card.Text>Secure Payment</Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col  xs={6} sm={6} md={6} lg={3} className='overflow category_block1'>

                        <Card variant='flush' className="border-0 text-center" style={{ lineHeight: '1em', width:{width}, overflow: 'hidden' }}>
                            <img variant="top" src='/photos/delivery.png' />
                            <Card.Body>
                                <Card.Text>Fast Shipping</Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row >
        </Col>
    
    )
}

export default WhyChooseUs
