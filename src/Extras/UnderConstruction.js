import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const UnderConstruction = () => {

    const [width, setWidth] = useState('25%')


    const updateCardWidth = () => {
        if(window.innerWidth <= 600){
            setWidth('100%')
        }else{
            setWidth('25%')
        }
    }

    useEffect(() => {
        window.addEventListener('resize', updateCardWidth)
        return () => {
            window.removeEventListener('resize', updateCardWidth)
        }
    }, [])


    const style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        // backgroundColor: 'beige',
        height: '100vh'
    }
    return (
        <div style={style}>
             <center><img style={{ width: width }} src="/photos/underConstruction.png" /></center>
            {/* <i style={{ fontSize: '5em', color: 'rgba(213 130 170)' }} className="far fa-frown"></i> */}

            <h2>FAQs section is under development!</h2>
            <p>Soon it will update. Thank you</p>
            <Link to="/all_products">
                <button className='page_btn'>Continue Shopping</button>
            </Link>
        </div>
    )

}

export default UnderConstruction
