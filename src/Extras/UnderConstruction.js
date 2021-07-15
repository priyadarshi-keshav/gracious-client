import React, { Fragment } from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UnderConstruction = () => {
    const Style = {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:'34px',
        height:'100vh'
    }

    return (
        <Fragment>
            <div style={Style}>
                <p className='heading'>Under Development</p>
                <Image width={400} src='/photos/underConstruction.jpg' fluid/><br/>
                <Link to='/'><button className='page_btn'>Back</button></Link>
            </div>
        </Fragment>
    )
}

export default UnderConstruction
