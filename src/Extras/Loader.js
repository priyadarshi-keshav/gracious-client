import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
    return (
        <Spinner animation='border' role='status' style={{
            width:'100px',
            height:'100px',
            margin:'auto',
            marginBottom:'50px',
            display:'block',
            color:'rgba(213 130 170)'
        }}>
            <span className='sr-only'>
                Loading...
            </span>
        </Spinner>
    )
}

export default Loader
