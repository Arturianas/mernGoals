import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import goalReducer from '../features/goalSlice'


export const store = configureStore({
  reducer: {
    //Veliau susikursime user ir goal reducerius ir sudesime cia
    auth: authReducer,
    goals: goalReducer
  },
});
