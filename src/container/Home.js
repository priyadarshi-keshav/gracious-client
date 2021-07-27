import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import HeroSection from "./HeroSection"
import WhyChooseUs from "./WhyChooseUs"
import NewArrival from "./NewArrival"
import MostViewed from "./MostViewed"
import ChooseCategory from "./ChooseCategory"
import SubHeader from './SubHeader';


const Home = () => {
    return (
        <Fragment>
            <SubHeader />
            <HeroSection />
            <ChooseCategory />
            <NewArrival />
            <MostViewed />
            <WhyChooseUs />
            <Row>
                <Col className="justify-content-md-center text-center" data-aos="zoom-in" style={{ background: 'beige' }}>
                    <p className="heading">Need help ? Mail Us.</p>
                    <h4><a title="support@graciousmade.in" style={{ color: 'black' }} href={`mailto:support@graciousmade.in`}>support@graciousmade.in</a></h4>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Home