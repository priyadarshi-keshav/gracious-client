import React, { useState, Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Row, Col, Spinner } from 'react-bootstrap'
import { getCategoryDetails, updateCategory } from '../action/categoryAction'
import SubHeader from './SubHeader'
import Loader from '../Extras/Loader'
import Message from '../Extras/Message'



const AdminCategoryDetails = ({ match, history }) => {

    const dispatch = useDispatch()
    const categoryId = match.params.categoryId
    const { categoryDetailsLoading, categoryDetailsError, categoryDetails } = useSelector(state => state.CategoryDetails)
    const { categoryUpdateLoading, categoryUpdateError, categoryUpdate } = useSelector(state => state.CategoryUpdate)
    const { profile } = useSelector(state => state.UserLogin)

    const [category_name, setCategory_name] = useState('')
    const [category_description, setCategory_description] = useState('')
    const [image, setImage] = useState(null)

    useEffect(() => {
        if (!profile) {
            history.push('/login')
        }
        if (profile && profile.role !== "admin") {
            history.push('/')
        }
        else {
            dispatch(getCategoryDetails(categoryId))
        }
    }, [history, dispatch, profile])


    const handleName = (e) => {
        setCategory_name(e.target.value)
    }

    const handleDescription = (e) => {
        setCategory_description(e.target.value)
    }

    const handleFileChange = (e) => {
        const imageFile = e.target.files[0]
        setImage(imageFile)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await dispatch(updateCategory(categoryId, category_name, category_description, image))
        await dispatch(getCategoryDetails(categoryId))
    }

    return (
        <Fragment>
            <SubHeader />
            <br />
            <br />
            <br />
            <br />
            <Row className="justify-content-md-center" style={{ padding: '34px' }}>
                <Col sm={12} md={8} lg={6}>
                    <p onClick={() => history.goBack()} style={{ cursor: 'pointer' }}>
                        <i className="fas fa-chevron-left"></i>  Back
                    </p>
                    <center><p className='heading'>Edit Category</p></center>
                    {categoryDetailsLoading || categoryUpdateLoading && <Loader />}
                    {categoryDetailsError && <Message variant='danger'>{categoryDetailsError}</Message>}
                    {categoryUpdateError && <Message variant='danger'>{categoryUpdateError}</Message>}
                    {categoryUpdate && <Message variant='success'>{categoryUpdate}</Message>}
                    {
                        categoryDetails &&
                        <div>
                            <Form onSubmit={handleSubmit} style={{ marginTop: '15%' }}>
                                <Form.Group>Category name*
                                    <input defaultValue={categoryDetails.category_name} className="form-control" type="text" name="category_name" onChange={handleName} required />
                                </Form.Group>

                                <Form.Group>Category Description*
                                    <textarea rows="5" className='form-control input-fill' name="category_description" 
                                    defaultValue={categoryDetails.category_description}
                                    onChange={handleDescription} required></textarea>
                                </Form.Group>

                                <Form.Group>Category image*
                                    <input className="form-control" type="file" name="category_image" onChange={handleFileChange} />
                                </Form.Group>

                                <button className="page_btn" type="submit">UPDATE</button>

                            </Form>
                        </div>
                    }

                </Col>
            </Row>
        </Fragment>
    )
}

export default AdminCategoryDetails
