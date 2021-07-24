import React, {Fragment} from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import SubHeader from './SubHeader';

const AboutUs = () => {

    const display = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }

    return (
        <Fragment>
            <SubHeader/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Col className="justify-content-md-center text-center" data-aos="fade-up" style={{ padding: '20px' }} data-aos-delay="400" >
                {/* <center><p className='heading'>About Gracious</p></center> */}
                <Row>
                    <Col md={12} data-aos="zoom-in" data-aos-delay="400" style={display}>
                        <p className='heading'>How we started ?</p>
                        <p>Hey everyone,
                            Before talking about us I am grateful that you took a moment and added up with your presence to our family.
                            A random day in lockdown when a thought clicked in my mind while thinking about life. Being a creative person also, the inclined perspective towards craft has always been a strength to me and that was the time when the idea of getting a hobby into some realistic approach got the attention.
                            Starting off not immediately but with patience, came across with a lot of struggles but all that was known was the fact of Independence, not relying on a second person to work for me I started with it. </p>
                    </Col>
                    {/* <Col md={6}>
                    <Image width={500} src='/photos/Scrunchies.png' alt="scrunchies" data-aos="zoom-out" data-aos-delay="400" />
                </Col> */}
                </Row >

                <Row>
                    <Col md={6}>
                        <Image style={{ width: '100%' }} src='/photos/ourServices.jpg' alt="scrunchies" data-aos="zoom-out" data-aos-delay="400" />
                    </Col>
                    <Col md={6} data-aos="fade-up" style={display}>
                        <p className='heading'>ABout Gracious</p>
                        <p>Each product is hand crafted by a single person and not just the product the selection of fabric, the cutting, the stitching rather every inch of the service being provided is handpicked. But with this a backlash follows, the thought in minds that wether the quality be good or not? The fact of each piece being prepared individually, the compromise stands nowhere that's the reason why we stand heads up high and confident with our products. Delivering the finest and the most elegant pieces at your doorstep we are climbing a small step towards happiness, each day and for this I am grateful to every customer and every seller in between, rather each individual in the way.
                            While the twists and turns don't let things get served on a platter, same was the case with gracious, we had our hardships and difficulties but the value of word is our utmost priority and the way we push ourselves to get the best out there.
                            Most importantly, I'm grateful to the web designer because the idea of launching the website gave me more confidence with my services.
                            Weaving with love and passion, we deliver to you the most beautiful accessories and hampers even on the days that are heavy we are working day and night to not let anyone be disheartened by us.
                            Thank you family, thank you for being a support through your time and tries throughout.</p>
                    </Col>
                </Row >

                <Row>
                    <Col className="justify-content-md-center text-center" data-aos="zoom-in" style={{ background: 'beige' }}>
                        <p className="heading">Need help ? Mail Us.</p>
                        <h4><a style={{ color: 'black' }} href={`mailto:support@graciousmade.in`}>support@graciousmade.in</a></h4>
                    </Col>
                </Row>
            </Col>
        </Fragment>

    )
}

export default AboutUs
