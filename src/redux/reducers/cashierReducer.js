import { CASHIER_DETAILS_FAIL, CASHIER_DETAILS_REQUEST, CASHIER_DETAILS_SUCCESS, CASHIER_REGISTER_FAIL, CASHIER_REGISTER_REQUEST, CASHIER_REGISTER_SUCCESS, CASHIER_SIGNIN_FAIL, CASHIER_SIGNIN_REQUEST, CASHIER_SIGNIN_SUCCESS, CASHIER_SIGNOUT } from "../constants/cashier";

export const CashierSigninReducer=(state={},action)=>{
    switch (action.type) {
        case CASHIER_SIGNIN_REQUEST:
            return {loading:true}
          
    case  CASHIER_SIGNIN_SUCCESS:
        return {loading:false,adminInfo:action.payload};
        case  CASHIER_SIGNIN_FAIL:
            return {loading:false,error:action.payload};
            case CASHIER_SIGNOUT:
                return {}
        
        default: return state
           ;
    }
}
export const CashierRegisterReducer=(state={},action)=>{
    switch (action.type) {
        case CASHIER_REGISTER_REQUEST:
            return {loading:true}
          case CASHIER_REGISTER_SUCCESS: 
          
            return {loading:false,cashierInfo:action.payload}
          
    case CASHIER_REGISTER_FAIL:
        return {loading:false,error:action.payload}
        default:
            return state;
    }
}



export const CashierDetailsReducer=(state={loading:true},action)=>{
    switch (action.type) {
        case CASHIER_DETAILS_REQUEST:
            return {loading:true}
          
    case CASHIER_DETAILS_SUCCESS:
        return {loading:false,cashier:action.payload};
        case CASHIER_DETAILS_FAIL:
            return {loading:false,error:action.payload};

          
        default: return state
           ;
    }
}


