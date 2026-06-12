import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './slices/authSlice';
import articlesReducer from './slices/articlesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    articles: articlesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    import.meta.env.DEV
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
