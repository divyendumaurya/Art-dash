import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from './RegistrationSlice'
import userReducer from './UserSlice'
// import productReducer from './ProductSlice'

const store = configureStore({
    reducer:{
        user: userReducer,
        registration: registrationReducer,
        // products: productReducer,
    },
});

export default store;