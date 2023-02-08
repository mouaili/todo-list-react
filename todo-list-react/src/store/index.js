import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './TasksSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

console.log('Je proviens de index.js', tasksReducer);

export default store;
