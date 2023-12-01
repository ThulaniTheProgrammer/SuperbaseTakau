import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import tillService from "./tillService"
const initialState={
    data:[],
    loading:false,
    error:null,
    success:false
}

export const addtotill=createAsyncThunk('till/add-to-till',async(productId,quantity,name,price,brand,model,signature,thunkAPI)=>{
    try {
        return await tillService.addtotill(productId,quantity,name,price,brand,model,signature)
    } catch (error) {
        const message= (error.response&& error.response.data&&error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
    }
    })
export const deletetillitem=createAsyncThunk('till/delete-till-item',async(id,signature,thunkAPI)=>{
    try {
        return await tillService.deletetillitem(id,signature)
    } catch (error) {
        const message= (error.response&& error.response.data&&error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
    }
    })
export const gettill=createAsyncThunk('till/get-till',async(signature,thunkAPI)=>{
    try {
        return await tillService.gettill(signature)
    } catch (error) {
        const message= (error.response&& error.response.data&&error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
    }
    })
export const emptytill=createAsyncThunk('till/empty-till',async(id,signature,thunkAPI)=>{
    try {
        return await tillService.emptytill(id,signature)
    } catch (error) {
        const message= (error.response&& error.response.data&&error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
    }
    })

  export  const tillSlice=createSlice({
    name:"till-slice",
        initialState,

        reducers:{},
        extraReducers:(builder)=>{
builder.addCase(addtotill.pending,(state)=>{
    state.loading=true
}).addCase(addtotill.fulfilled,(state,action)=>{
    state.loading=false
    state.data=action.payload
    state.success=true
}).addCase(addtotill.rejected,(state,action)=>{
    state.loading=false
    state.error=action.payload
    
}).addCase(gettill.pending,(state)=>{
    state.loading=true
    
    
}).addCase(gettill.fulfilled,(state,action)=>{
    state.loading=false
    state.data=action.payload
    state.success=true
       
}).addCase(gettill.rejected,(state,action)=>{
    state.loading=false
    state.data=action.payload
       
}).addCase(deletetillitem.pending,(state)=>{
    state.loading=true

}).addCase(deletetillitem.fulfilled,(state,action)=>{
    state.loading=false
    state.data=action.payload
    state.success=true
    
}).addCase(deletetillitem.rejected,(state,action)=>{
    state.loading=false
    state.error=action.payload
   
    
}).addCase(emptytill.pending,(state)=>{
    state.loading=true
}).addCase(emptytill.fulfilled,(state,action)=>{
    state.loading=false
    state.data=action.payload
    state.success=true
}).addCase(emptytill.rejected,(state,action)=>{
    state.loading=false
    state.error=action.payload
   
})

        }
    })


    export default tillSlice.reducer 
