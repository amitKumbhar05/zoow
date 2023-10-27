import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn:false,
    type:'user',
    Data:null
}

const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.isLoggedIn = true
            state.Data = action.payload
            if(state.Data.type==0)
            {
                state.type='admin'
            }
        },

        logout:(state,action)=>{
            state.isLoggedIn = false
            state.Data = null
            state.type = 'user'
        }
    }
})

export const {login,logout} = AuthSlice.actions

export default AuthSlice.reducer