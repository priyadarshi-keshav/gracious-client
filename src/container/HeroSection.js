import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import '../assets/css/heroSection.css'

const HeroSection = () => {

    return (
        <Row className='banner justify-content-md-center text-center' data-aos="zoom-in">
            <Col md={7}>
                <h2>Each Purchase will be made with pleasure.</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nostrum nulla voluptate dolor culpa animi praesentium exercitationem nisi veniam blanditiis corrupti molestias qui quod molestiae enim earum, iure eos quam neque! Ipsa, quidem non? Voluptate minima quae architecto quisquam totam nihil quidem repellat corporis possimus consequatur quasi asperiores, dolor voluptatibus?
                </p>
                <Link to="/all_products"><button className="shopNow_btn">
                    Shop Now
                </button></Link>
            </Col>

        </Row>
    )
}

export default HeroSection
