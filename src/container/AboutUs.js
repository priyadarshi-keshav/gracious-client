import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'

const AboutUs = () => {

    const display = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }

    return (
        <Col className="justify-content-md-center text-center" data-aos="fade-up" style={{ padding: '20px', textTransform: 'uppercase' }} data-aos-delay="400" >
            <center><p className='heading'>About Gracious</p></center>
            <Row>
                <Col md={6}>
                    <Image style={{width:'50%'}} src='/photos/ourServices.jpg' alt="scrunchies" data-aos="zoom-out" data-aos-delay="400" />
                </Col>
                <Col md={6} data-aos="fade-up" style={display}>
                    <p className='heading'>Our Services</p>
                    <p>At ChocoCraft we believe in making our customers happy! Our team will work with you every step of the way to ensure that you get perfect gift for your event or occasion.

                        Right from your first call, you will work with our experienced account handling team. We work with you through the entire process, of designing and making the gifts, to delivering them to your doorstep.

                        We are committed to delivering the best service experience all the way and you will feel the difference when you work with us!</p>
                </Col>
            </Row >

            <Row>
                <Col md={12} data-aos="fade-up" data-aos-delay="400" style={display}>
                    <p className='heading'>Product Quality</p>
                    <p>When it comes to product quality we make no compromises! We use only the best ingredients sourced from the best suppliers globally.

                        The colors used for printing on chocolates comply to USFDA and are sourced from one of the best suppliers. The chocolates are made and packed in our production facility under the strictest norms.

                        We understand we play an important part in a happy occasion that you are celebrating and we never want to let you down. We work hard to make sure that each chocolate and each box is handcrafted to perfection!</p>
                </Col>
                {/* <Col md={6}>
                    <Image width={500} src='/photos/Scrunchies.png' alt="scrunchies" data-aos="zoom-out" data-aos-delay="400" />
                </Col> */}
            </Row >
        </Col>

    )
}

export default AboutUs
