import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    adult:200,
    child:100
}

const PriceSlice = createSlice({
    name:'price',
    initialState,
    reducers:{
        change:(state,action)=>{
            state.adult = action.Playload.adult
            state.child = action.Playload.child
        }
    }
})

export const {change} = PriceSlice.actions

export default PriceSlice.reducer