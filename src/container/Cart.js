import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SubHeader from './SubHeader'
import EmptyCart from '../Extras/EmptyCart'
import DisCart from '../component/DisCart'
import Checkout from '../component/Checkout'
import { getCartProducts } from '../action/AuthCartAction'
import Message from '../Extras/Message'
import Loader from '../Extras/Loader'

const Cart = () => {

    const dispatch = useDispatch()
    const { cartItems } = useSelector(state => state.Cart)
    const { authCartItems } = useSelector(state => state.AuthCart)
    const { profile } = useSelector(state => state.UserLogin)
    const { getCartLoading, getCartError, removeCartLoading, removeCartError, updateQuantityLoading, updateQuantityError } = useSelector(state => state.AuthCart)

    useEffect(() => {
        if (profile) {
            dispatch(getCartProducts())
        }
    }, [profile])

    return (
        <Fragment>

            <SubHeader />
            <br />
            <br />
            <br />
            <div>
                {
                    cartItems.length === 0 && authCartItems.length === 0 ? <EmptyCart /> :
                        <div>
                            <center>
                                <span className='heading'>Cart ({authCartItems.length !== 0 ? authCartItems.length : cartItems.length})</span>
                                {getCartError && <Message variant='danger'>{getCartError}</Message>}
                                {removeCartError && <Message variant='danger'>{removeCartError}</Message>}
                                {updateQuantityError && <Message variant='danger'>{updateQuantityError}</Message>}
                            </center>

                            <div className='container row' style={{ marginTop: '50px', marginRight:'auto', marginLeft:'auto' }} >
                                <div className='col-md-9'>
                                    <DisCart cartItems={authCartItems.length !== 0 ? authCartItems : cartItems} />
                                </div>

                                <div className='col-md-3'>
                                    <Checkout cartItems={authCartItems.length !== 0 ? authCartItems : cartItems} />
                                </div>
                            </div>

                        </div>
                }
            </div>
        </Fragment>
    )
}

export default Cart