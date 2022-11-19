import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import { productsReducer,productsDispReducer, productDetailsReducer, newProductReducer, productReducer } from './reducer/productReducer';
import { authReducer } from './reducer/userReducer'
import { cartReducer } from './reducer/cartReducer';
import { allOrdersReducer, myOrdersReducer, newOrderReducer, orderDetailsReducer, orderReducer } from './reducer/orderReducer';

const reducer= combineReducers ({
    products:productsReducer,
    productsDispo:productsDispReducer,
    productDetails: productDetailsReducer,
    auth: authReducer,
    cart: cartReducer,
    newProduct: newProductReducer,
    product: productReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    allOrders: allOrdersReducer,
    order: orderReducer,
})

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
            shippingInfo: localStorage.getItem('shippingInfo')
                ? JSON.parse(localStorage.getItem('shippingInfo'))
                : {}
    }
}

const middleware= [thunk]
const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;