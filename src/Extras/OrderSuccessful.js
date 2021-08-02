import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SubHeader from '../container/SubHeader'
import { orderPlacedReset } from '../action/orderAction'

const OrderSuccessful = ({ history }) => {

    const [width, setWidth] = useState('25%')
    const dispatch = useDispatch()
    const { profile } = useSelector(state => state.UserLogin)
    const { success, error } = useSelector(state => state.PlaceOrder)

    const updateCardWidth = () => {
        if (window.innerWidth <= 600) {
            setWidth('70%')
        } else {
            setWidth('25%')
        }
    }

    useEffect(() => {
        window.addEventListener('resize', updateCardWidth)
        return () => {
            window.removeEventListener('resize', updateCardWidth)
        }
    }, [])


    useEffect(() => {
        if(!profile || !success){
            history.push('/')
        }
        return () => {
            dispatch(orderPlacedReset())
        }

    }, [history])

    const style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        // backgroundColor:'beige', 
        height: '100vh'
    }
    return (
        <Fragment>
            <SubHeader />
            <div style={style}>
                <center><img style={{ width: width }} src="/photos/order_successful.png" /></center>
                {/* <i style={{ fontSize: '5em', color: 'rgba(213 130 170)' }} className="far fa-check-circle"></i> */}
                {profile && <h4>Hey {profile.firstname} {profile.lastname},</h4>}
                <h2>Your Order is Confirmed!</h2>
                <p>We'll send you a shipping confrmation on your given details as soon as your order ships.</p>
                <Link to="/profile#myorders">
                    <button className='page_btn'>VIEW ORDERS</button>
                </Link>
            </div>
        </Fragment>
    )
}

export default OrderSuccessful
