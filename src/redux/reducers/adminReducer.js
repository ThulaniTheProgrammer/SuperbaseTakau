import { ADMIN_DETAILS_FAIL, ADMIN_DETAILS_REQUEST, ADMIN_DETAILS_SUCCESS, ADMIN_REGISTER_REQUEST, ADMIN_REGISTER_SUCCESS, ADMIN_SIGNIN_FAIL, ADMIN_SIGNIN_REQUEST, ADMIN_SIGNIN_SUCCESS, ADMIN_SIGNOUT, GET_ADMINS_FAIL, GET_ADMINS_REQUEST, GET_ADMINS_SUCCESS } from "../constants/admin";
import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SIGNOUT, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstants";

export const AdminSigninReducer=(state={},action)=>{
    switch (action.type) {
        case ADMIN_SIGNIN_REQUEST:
            return {loading:true}
          
    case  ADMIN_SIGNIN_SUCCESS:
        return {loading:false,adminInfo:action.payload};
        case  ADMIN_SIGNIN_FAIL:
            return {loading:false,error:action.payload};
            case ADMIN_SIGNOUT:
                return {}
        
        default: return state
           ;
    }
}
export const AdminRegisterReducer=(state={},action)=>{
    switch (action.type) {
        case ADMIN_REGISTER_REQUEST:
            return {loading:true}
          
    case ADMIN_REGISTER_SUCCESS:
        return {loading:false,adminInfo:action.payload};
        case ADMIN_REGISTER_REQUEST:
            return {loading:false,error:action.payload};

         
        default: return state
           ;
    }
}

export const AdminDetailsReducer=(state={loading:true},action)=>{
    switch (action.type) {
        case ADMIN_DETAILS_REQUEST:
            return {loading:true}
          
    case ADMIN_DETAILS_SUCCESS:
        return {loading:false,admin:action.payload};
        case ADMIN_DETAILS_FAIL:
            return {loading:false,error:action.payload};

          
        default: return state
           ;
    }
}



