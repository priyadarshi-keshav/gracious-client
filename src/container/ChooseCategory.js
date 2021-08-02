import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../action/categoryAction'
import Loader from '../Extras/Loader'


const ChooseCategory = () => {

    const dispatch = useDispatch()
    const { categoryLoading, categoryError, category } = useSelector(state => state.Category)

    useEffect(() => {
        dispatch(getCategory())
    }, [dispatch])

    return (
        <Fragment>
            <center style={{ padding: '20px' }}>
                <p className='heading' data-aos="fade-up">Shop By Category</p>
            </center>

            {categoryLoading ? <Loader /> :

                <div className="catContainerMain">
                    {
                        category && category.map(items => {
                            return (
                                <div key={items._id} className='catContainer' data-aos="fade-up">

                                    <img className="catImg" variant="top" src={items.category_image} />

                                    <div className="catText">
                                        <center>
                                            <Link to={`/products/${items._id}`}>
                                                <button className='page_btn'>Shop Now</button>
                                            </Link>
                                            <h4>{items.category_name}</h4>
                                        </center>
                                    </div>

                                </div>
                            )
                        })
                    }

                </div >
            }
            {/* </Col> */}
        </Fragment>
    )
}

export default ChooseCategory
