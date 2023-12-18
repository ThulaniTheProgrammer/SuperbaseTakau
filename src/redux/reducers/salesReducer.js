//import { ORCHARD_SALES_LIST_REQUEST, ORCHARD_SALES_LIST_SUCCESS, ORCHARD_SALES_LIST_FAIL, ORCHARD_SALES_CREATE_REQUEST, ORCHARD_SALES_CREATE_SUCCESS, ORCHARD_SALES_CREATE_FAIL ,ORCHARD_SALES_DELETE_REQUEST, ORCHARD_SALES_DELETE_FAIL,ORCHARD_SALES_DELETE_SUCCESS, ORCHARD_SALES_UPDATE_REQUEST,ORCHARD_SALES_UPDATE_SUCCESS, ORCHARD_SALES_UPDATE_FAIL } from "../../constants/operations/orchardsales";


import { SALES_CREATE_FAIL, SALES_CREATE_REQUEST, SALES_CREATE_SUCCESS, SALES_DELETE_FAIL, SALES_DELETE_REQUEST, SALES_DELETE_SUCCESS, SALES_LIST_FAIL, SALES_LIST_REQUEST, SALES_LIST_SUCCESS, SALES_UPDATE_FAIL, SALES_UPDATE_REQUEST, SALES_UPDATE_SUCCESS } from "../constants/sales";
//import { PLANT_SALES_CREATE_FAIL, PLANT_SALES_CREATE_REQUEST, PLANT_SALES_CREATE_SUCCESS, PLANT_SALES_DELETE_FAIL, PLANT_SALES_DELETE_REQUEST, PLANT_SALES_DELETE_SUCCESS, PLANT_SALES_LIST_FAIL, PLANT_SALES_LIST_REQUEST, PLANT_SALES_LIST_SUCCESS, PLANT_SALES_UPDATE_FAIL, PLANT_SALES_UPDATE_REQUEST, PLANT_SALES_UPDATE_SUCCESS } from "../../constants/operations/plantsales";

export const getSalesReducer=(state={loading:true},action)=>{
    switch (action.type) {
        case SALES_LIST_REQUEST:
            
            return  {loading:true}
    case SALES_LIST_SUCCESS:
        return  {loading:false,data:action.payload}
        case SALES_LIST_FAIL:
            return  {loading:false,error:action.payload}
        default:
           return state;
    }
    }




    export const createSalesReducer=(state={},action)=>{
        switch (action) {
            case SALES_CREATE_REQUEST:
                return {loading:true}
              case SALES_CREATE_SUCCESS: 
              
                return {loading:false,success:true,data:action.payload}
              
        case SALES_CREATE_FAIL:
            return {loading:false,error:action.payload}
            default:
                return state;
        }
    }

    export const updateSalesReducer=(state={},action)=>{
        switch (action) {
            case SALES_UPDATE_REQUEST:
                return {loading:true}
              case SALES_UPDATE_SUCCESS: 
              
                return {loading:false,success:true,data:action.payload}
              
        case SALES_UPDATE_FAIL:
            return {loading:false,error:action.payload}
            default:
                return state;
        }
    }
    export const deleteSalesReducer=(state={},action)=>{
        switch (action) {
            case SALES_DELETE_REQUEST:
                return {loading:true}
              case SALES_DELETE_SUCCESS: 
              
                return {loading:false,success:true,data:action.payload}
              
        case SALES_DELETE_FAIL:
            return {loading:false,error:action.payload}
            default:
                return state;
        }
    }
