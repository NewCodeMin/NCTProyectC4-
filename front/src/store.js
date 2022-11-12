import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import { productsReducer,productsDispReducer, productDetailsReducer } from './reducer/productReducer';

const reducer= combineReducers ({
    products:productsReducer,
    productsDispo:productsDispReducer,
    productDetails: productDetailsReducer
})

let initialState = {}

const middleware= [thunk]
const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;