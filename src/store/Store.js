
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import MainReducer from '../reducer/MainReducer'


const getItemsFromStorage = localStorage.getItem('cartProducts') ? JSON.parse(localStorage.getItem('cartProducts')) : []
const getAuthItemsFromStorage = localStorage.getItem('authCartProducts') ? JSON.parse(localStorage.getItem('authCartProducts')) : []
const getProfileFromStorage = localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) : null
const getShippingAddressFromStorage = localStorage.getItem('address') ? JSON.parse(localStorage.getItem('address')) : null
const getPaymentMethodFromStorage = localStorage.getItem('payment') ? JSON.parse(localStorage.getItem('payment')) : null
const getGiftWrapFromStorage = localStorage.getItem('giftwrap') ? JSON.parse(localStorage.getItem('giftwrap')) : null
const getGiftWrapSuccessFromStorage = localStorage.getItem('giftwrapsuccess') ? JSON.parse(localStorage.getItem('giftwrapsuccess')) : null
const getOrderNoteFromStorage = localStorage.getItem('ordernote') ? JSON.parse(localStorage.getItem('ordernote')) : null

const initialState = {
    Cart : { 
        cartItems : getItemsFromStorage, 
        shippingAddress : getShippingAddressFromStorage, 
        paymentMethod:getPaymentMethodFromStorage,
        giftWrap: getGiftWrapFromStorage,
        giftWrapSuccess: getGiftWrapSuccessFromStorage,
        orderNote: getOrderNoteFromStorage
    },
    AuthCart : { 
        authCartItems : getAuthItemsFromStorage,
    },
    UserLogin : { profile : getProfileFromStorage },
    OrderDetails : { orderDetails : null }
}

const middleware = [thunk]

// const store = createStore(MainReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
const store = createStore(MainReducer, initialState, applyMiddleware(...middleware))

export default store