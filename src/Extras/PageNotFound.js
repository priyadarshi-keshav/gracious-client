import React, { Fragment } from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    const Style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '34px',
        width:'55%',
        marginLeft:'auto',
        marginRight:'auto',
    }

    return (
        <Fragment>
            <div style={Style}>
                <Image src='/photos/notFound.gif' fluid /><br />
                <Link to='/'>
                    <button className='page_btn'>Go Home</button></Link>
            </div>
        </Fragment>
    )
}

export default PageNotFound
