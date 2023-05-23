import { configureStore } from '@reduxjs/toolkit';
import apartReducer from './features/apartData/apartSlice'
import userDataReducer from './features/userData/userSlice'

export default configureStore({
    reducer: {
        apart: apartReducer,
        user: userDataReducer,


    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),


});

