import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from './RegistrationSlice'
import userReducer from './UserSlice'
import artistReducer from './ArtistSlice'

const store = configureStore({
    reducer:{
        user: userReducer,
        registration: registrationReducer,
        artist: artistReducer,
    },
});

export default store;