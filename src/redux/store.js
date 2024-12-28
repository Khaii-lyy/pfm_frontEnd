import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './studentReducer';

const store = configureStore({
  reducer: {
    student: studentReducer, // Add your reducers here
  },
});

export default store;
