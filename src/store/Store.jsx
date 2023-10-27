import { configureStore } from "@reduxjs/toolkit";

import Authreducer from './AuthSlice'

const store = configureStore({
    reducer:{
        auth:Authreducer
    }
})

export default store