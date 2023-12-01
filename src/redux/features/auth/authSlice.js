import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import authService from './authService';
//get user from local storage
const user= JSON.parse(localStorage.getItem("user"))
const initialState= {
    user:user ? user :null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

//register function

export const managerregister=createAsyncThunk('auth/manager-register',async(user,thunkAPI)=>{
try {
    return await authService.managerSignup(user)
} catch (error) {
    const message=error.response.data.msg || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
}
})
export const managerlogin=createAsyncThunk('auth/manager-login',async(user,thunkAPI)=>{
try {
    return await authService.managerSignin(user)
} catch (error) {
    console.log(error);
    const message=error.response.data.msg || error.message || error.toString()
return thunkAPI.rejectWithValue(message)
}
})
export const managerprofile=createAsyncThunk('auth/manager-profile',async(signature,thunkAPI)=>{
try {
    return await authService.managerProfile(signature)
} catch (error) {
    const message= (error.response&& error.response.data&&error.response.data.message) || error.message || error.toString()
return thunkAPI.rejectWithValue(message)
}
})
export const managerupdateprofile=createAsyncThunk('auth/manager-update-profile',async(user,signature,thunkAPI)=>{
try {
    return await authService.managerUpdateProfile(user,signature)
} catch (error) {
    const message= (error.response&& error.response.data&&error.response.data.message) || error.message || error.toString()
return thunkAPI.rejectWithValue(message)
}
})
export const adminregister=createAsyncThunk('auth/admin-register',async(user,thunkAPI)=>{
try {
    return await authService.adminSignup(user)
} catch (error) {
    const message=error.response.data.msg || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
}
})
export const adminlogin=createAsyncThunk('auth/admin-login',async(user,thunkAPI)=>{
try {
    return await authService.adminSignin(user)
} catch (error) {
    const message=error.response.data.msg || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
}
})
export const adminprofile=createAsyncThunk('auth/admin-profile',async(signature,thunkAPI)=>{
try {
    return await authService.adminProfile(signature)
} catch (error) {
    const message= (error.response&& error.response.data&&error.response.data.message) || error.message || error.toString()
return thunkAPI.rejectWithValue(message)
}
})
export const adminupdateprofile=createAsyncThunk('auth/update-admin-profile',async(user,signature,thunkAPI)=>{
try {
    return await authService.adminUpdateProfile(user,signature)
} catch (error) {
    const message= (error.response&& error.response.data&&error.response.data.message) || error.message || error.toString()
return thunkAPI.rejectWithValue(message)
}
})
export const tilloperatorregister=createAsyncThunk('auth/till-operator-register',async(user,thunkAPI)=>{
try {
    return await authService.tillOperatorSignup(user)
} catch (error) {
    const message=error.response.data.msg || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
}
})
export const tilloperatorlogin=createAsyncThunk('auth/till-operator-login',async(user,thunkAPI)=>{
try {
    return await authService.tillOperatorSignin(user)
} catch (error) {
    const message=error.response.data.msg || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
}
})
export const tilloperatorprofile=createAsyncThunk('auth/till-operator-profile',async(signature,thunkAPI)=>{
try {
    return await authService.tillOperatorProfile(signature)
} catch (error) {
    const message= (error.response&& error.response.data&&error.response.data.message) || error.message || error.toString()
return thunkAPI.rejectWithValue(message)
}
})
export const tilloperatorupdateprofile=createAsyncThunk('auth/update-till-operator-profile',async(user,signature,thunkAPI)=>{
try {
    return await authService.tillOperatorUpdateProfile(user,signature)
} catch (error) {
    const message= (error.response&& error.response.data&&error.response.data.message) || error.message || error.toString()
return thunkAPI.rejectWithValue(message)
}
})

export const logout=createAsyncThunk('auth/logout',async()=>{
     authService.logout()
})

export const authSlice= createSlice({
    name:"auth",
    initialState,
    reducers:{
        reset :(state)=>{
state.isLoading=false
state.isError=false
state.isSuccess=false
state.message=""
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(managerregister.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(managerregister.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user=action.payload
        })
        .addCase(managerregister.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.user=null
        })
        .addCase(managerlogin.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(managerlogin.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user=action.payload
        })
        .addCase(managerlogin.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.user=null
        })
        
        .addCase(managerprofile.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(managerprofile.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user=action.payload
        })
        .addCase(managerprofile.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.user=null
        })
        .addCase(managerupdateprofile.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(managerupdateprofile.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user=action.payload
        })
        .addCase(managerupdateprofile.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.user=null
        })
        .addCase(adminregister.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(adminregister.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user=action.payload
          
        })
        .addCase(adminregister.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.user=null
        })
        .addCase(adminlogin.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(adminlogin.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user=action.payload
        })
        .addCase(adminlogin.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.user=null
        })
      
        .addCase(adminprofile.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(adminprofile.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user=action.payload
        })
        .addCase(adminprofile.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.user=null
        })
        .addCase(adminupdateprofile.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(adminupdateprofile.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user=action.payload
        })
        .addCase(adminupdateprofile.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.user=null
        })
        .addCase(tilloperatorregister.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(tilloperatorregister.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user=action.payload
        })
        .addCase(tilloperatorregister.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.user=null
        })
        .addCase(tilloperatorlogin.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(tilloperatorlogin.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user=action.payload
        })
        .addCase(tilloperatorlogin.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.user=null
        })
       
        .addCase(tilloperatorprofile.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(tilloperatorprofile.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user=action.payload
        })
        .addCase(tilloperatorprofile.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.user=null
        })
        .addCase(tilloperatorupdateprofile.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(tilloperatorupdateprofile.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user=action.payload
        })
        .addCase(tilloperatorupdateprofile.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.user=null
        }).addCase(logout.fulfilled,(state)=>{
            state.user= null
        })
      
        
    }
})


export default authSlice.reducer;
export const {reset} = authSlice.actions