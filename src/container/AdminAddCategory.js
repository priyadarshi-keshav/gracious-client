import React, { useState, Fragment, useEffect } from 'react'
import { Spinner, Form, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { TextField } from '@material-ui/core'
import { addCategory } from '../action/categoryAction'
import SubHeader from './SubHeader'
import Message from '../Extras/Message'


const AdminAddCategory = ({ history }) => {

    const dispatch = useDispatch()

    const [category_name, setCategory_name] = useState('')
    const [category_description, setCategory_description] = useState('')
    const [image, setImage] = useState('')

    const { profile } = useSelector(state => state.UserLogin)
    const { loading, error, category_added } = useSelector(state => state.AddCategory)

    useEffect(()=>{
        if (!profile) {
            history.push('/login')
        }
        if (profile && profile.role !== "admin") {
            history.push('/')
        }
        if(category_added){
            const form = document.getElementById("myForm")
            form.reset()
        }
    },[category_added])

    const Style = {
        padding: '34px'
    }

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

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addCategory(category_name, image, category_description))
    }

    return (
        <Fragment>
            <SubHeader />
            <br />
            <br />
            <br />
            <br />
            <Row className="justify-content-md-center" style={Style}>
                <Col sm={12} md={8} lg={6}>
                    <p onClick={() => history.goBack()} style={{ cursor: 'pointer' }}>
                        <i className="fas fa-chevron-left"></i>  Back
                    </p>
                    <center><p className='heading'>Publish Category</p></center>
                    {category_added && <Message variant='success'>{category_added}</Message>}
                    {error && <Message variant='danger'>{error}</Message>}

                    <div>
                        <Form id="myForm" onSubmit={handleSubmit} style={{ marginTop: '15%' }}>
                            <Form.Group>Category name*
                                <TextField className="form-control" type="text" name="category_name" onChange={handleName} required />
                            </Form.Group>

                            <Form.Group>Category Description*
                                <textarea rows="5" className='form-control input-fill' name="description" onChange={handleDescription} required></textarea>
                            </Form.Group>


                            <Form.Group>Category image*
                                <input id="control" className="form-control" type="file" name="category_image" onChange={handleFileChange} required />
                            </Form.Group>

                            {
                                loading ? <button className='page_btn'>
                                    <Spinner animation="border" />
                                </button>
                                    :
                                    <button className="page_btn" type="submit">PUBLISH</button>
                            }


                        </Form>
                    </div>

                </Col>
            </Row>
        </Fragment>
    )
}

export default AdminAddCategory
