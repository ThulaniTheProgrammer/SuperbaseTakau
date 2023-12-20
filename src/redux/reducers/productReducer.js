//import { ORCHARD_SALES_LIST_REQUEST, ORCHARD_SALES_LIST_SUCCESS, ORCHARD_SALES_LIST_FAIL, ORCHARD_SALES_CREATE_REQUEST, ORCHARD_SALES_CREATE_SUCCESS, ORCHARD_SALES_CREATE_FAIL ,ORCHARD_SALES_DELETE_REQUEST, ORCHARD_SALES_DELETE_FAIL,ORCHARD_SALES_DELETE_SUCCESS, ORCHARD_SALES_UPDATE_REQUEST,ORCHARD_SALES_UPDATE_SUCCESS, ORCHARD_SALES_UPDATE_FAIL } from "../../constants/operations/orchardsales";


import { CREATE_PRODUCT_FAIL, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCT_FAIL, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAIL, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "../constants/products";


//import { PLANT_SALES_CREATE_FAIL, PLANT_SALES_CREATE_REQUEST, PLANT_SALES_CREATE_SUCCESS, PLANT_SALES_DELETE_FAIL, PLANT_SALES_DELETE_REQUEST, PLANT_SALES_DELETE_SUCCESS, PLANT_SALES_LIST_FAIL, PLANT_SALES_LIST_REQUEST, PLANT_SALES_LIST_SUCCESS, PLANT_SALES_UPDATE_FAIL, PLANT_SALES_UPDATE_REQUEST, PLANT_SALES_UPDATE_SUCCESS } from "../../constants/operations/plantsales";

export const getProductsReducer=(state={loading:true},action)=>{
    switch (action.type) {
    case GET_PRODUCTS_REQUEST:
            
            return  {loading:true}
    case GET_PRODUCTS_SUCCESS:
        return  {loading:false,data:action.payload}
        case GET_PRODUCTS_FAIL:
            return  {loading:false,error:action.payload}
        default:
           return state;
    }
    }
export const getProductReducer=(state={loading:true},action)=>{
    switch (action.type) {
    case GET_PRODUCT_REQUEST:
            
            return  {loading:true}
    case GET_PRODUCT_SUCCESS:
        return  {loading:false,data:action.payload}
        case GET_PRODUCT_FAIL:
            return  {loading:false,error:action.payload}
        default:
           return state;
    }
    }




    export const createProductReducer=(state={},action)=>{
        switch (action.type) {
            case CREATE_PRODUCT_REQUEST:
                return {loading:true}
              case CREATE_PRODUCT_SUCCESS: 
              
                return {loading:false,success:true,data:action.payload}
              
        case CREATE_PRODUCT_FAIL:
            return {loading:false,error:action.payload}
            default:
                return state;
        }
    }

    export const updateProductReducer=(state={},action)=>{
        switch (action) {
            case UPDATE_PRODUCT_REQUEST:
                return {loading:true}
              case UPDATE_PRODUCT_SUCCESS: 
              
                return {loading:false,success:true,data:action.payload}
              
        case UPDATE_PRODUCT_FAIL:
            return {loading:false,error:action.payload}
            default:
                return state;
        }
    }
    export const deleteProductReducer=(state={},action)=>{
        switch (action) {
            case DELETE_PRODUCT_REQUEST:
                return {loading:true}
              case DELETE_PRODUCT_SUCCESS: 
              
                return {loading:false,success:true,data:action.payload}
              
        case DELETE_PRODUCT_FAIL:
            return {loading:false,error:action.payload}
            default:
                return state;
        }
    }
