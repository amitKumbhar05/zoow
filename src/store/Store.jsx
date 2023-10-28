import { configureStore } from "@reduxjs/toolkit";

import Authreducer from './AuthSlice'
import PriceSlice from "./PriceSlice";


const store = configureStore({
    reducer:{
        auth:Authreducer,
        price:PriceSlice
    }
})

export default store