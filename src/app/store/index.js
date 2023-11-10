import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../../features/authslice';

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
