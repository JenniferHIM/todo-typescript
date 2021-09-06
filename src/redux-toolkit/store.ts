import {configureStore} from '@reduxjs/toolkit';
import reducer from './slice';

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
