import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'
import '../assets/css/heroSection.css'
import { HashLink } from "react-router-hash-link"

const HeroSection = () => {

    return (
        <div className='banner' data-aos="zoom-in">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/photos/herobackground3.jpg"
                        alt="most viewed scrunchies"
                        data-aos="zoom-in"
                    />
                    <div className="bannerChild" data-aos="fade-up">
                        <h2>Most Viewed Scrunchies</h2>
                        <HashLink to="#mostViewed">
                            <button className="shopNow_btn">
                                Shop Now
                            </button>
                        </HashLink>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        // src="/photos/herobackground2.jpg"
                        src="https://gracious-e-commerce-s3-bucket.s3.ap-south-1.amazonaws.com/b1e7c5519ff69b62781dc148f3916028"
                        alt="Regular scrunchies"
                        data-aos="zoom-in"
                    />
                    <div className="bannerChild" data-aos="fade-up">
                        <h2>Shop Regular Scrunchies</h2>
                        <Link to="/products/60fc5cd6276e192f4721f92e"><button className="shopNow_btn">
                            Shop Now
                        </button></Link>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/photos/herobackground.jpg"
                        alt="Handcrafted scrunchies"
                        data-aos="zoom-in"
                    />
                    <div className="bannerChild" data-aos="fade-up">
                        <h2>Shop handcrafted Scrunchies</h2>
                        <Link to="/all_products"><button className="shopNow_btn">
                            Shop Now
                        </button></Link>
                    </div>

                </Carousel.Item>


            </Carousel>
            {/* <img src="/photos/herobackground.jpg" alt="hero section"/>
            <div className="bannerChild" data-aos="fade-up">
                <h2>Shop handcrafted Scrunchies</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nostrum nulla voluptate dolor culpa animi praesentium exercitationem nisi veniam blanditiis corrupti molestias qui quod molestiae enim earum, iure eos quam neque! Ipsa, quidem non? Voluptate minima quae architecto quisquam totam nihil quidem repellat corporis possimus consequatur quasi asperiores, dolor voluptatibus?
                </p>
                <Link to="/all_products"><button className="shopNow_btn">
                    Shop Now
                </button></Link>
            </div> */}

        </div>
    )
}

export default HeroSection
