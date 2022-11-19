import axios from 'axios';

import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    ALL_PRODUCTSDISPO_REQUEST,
    ALL_PRODUCTSDISPO_SUCCESS,
    ALL_PRODUCTSDISPO_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    CLEAR_ERRORS
} from '../constants/productConstants';

export const getProducts = ( currentPage =1,keyword='') => async(dispatch)=>{
    try {
        dispatch({type: ALL_PRODUCTS_REQUEST})

        let link=`/api/productos?keyword=${keyword}&page=${currentPage}`
        const {data} = await axios.get(link)

        dispatch({
            type:ALL_PRODUCTS_SUCCESS,
            payload: data
        })
    }catch (error){
        dispatch({
            type:ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}

//VER PRODUCTOS DISPONIBLES
export const getProductsDispo = ( currentPage =1,keyword='') => async(dispatch)=>{
    try {
        dispatch({type: ALL_PRODUCTSDISPO_REQUEST})

        let link=`/api/productosDispo?keyword=${keyword}&page=${currentPage}`
        const {data} = await axios.get(link)

        dispatch({
            type:ALL_PRODUCTSDISPO_SUCCESS,
            payload: data
        })
    }catch (error){
        dispatch({
            type:ALL_PRODUCTSDISPO_FAIL,
            payload: error.response.data.message
        })
    }
}

//VER DETALLE DEL PRODUCTO
export const getProductDetails = (id) => async(dispatch)=>{
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST})

        const {data} = await axios.get(`/api/producto/${id}`)

        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload: data.product
        })
    }catch (error){
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

//NUEVO PRODUCTO 
export const newProduct = ( productData ) => async (dispatch)=>{
    try {
        dispatch({type: NEW_PRODUCT_REQUEST})

        const config ={ 
            header: { 
                'Content-Type':'application/json'
            }
        }

        const {data} = await axios.post('/api/producto/nuevo', productData, config)

        dispatch({
            type: NEW_PRODUCT_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: NEW_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
}

//Eliminar un producto (admin)
export const deleteProduct = (id) => async(dispatch)=>{
    try{
        dispatch ({type: DELETE_PRODUCT_REQUEST})
        const {data} = await axios.delete(`/api/producto/${id}`)

        dispatch({
            type: DELETE_PRODUCT_SUCCESS,
            payload: data.success
        })
    } catch(error){
        dispatch({
            type: DELETE_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
}


//update Product (admin)
export const updateProduct = (id, productData) => async (dispatch) =>{
    try{
        dispatch ({type: UPDATE_PRODUCT_REQUEST})

        const config={
            headers: {
                "Content-Type": "application/json"
            }
        }
        const {data} = await axios.put(`/api/producto/${id}`, productData, config)

        dispatch({
            type: UPDATE_PRODUCT_SUCCESS,
            payload: data.success
        })

    } catch(error){
        dispatch({
            type: UPDATE_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
}

//clear error
export const clearErrors = () => async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}