import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { fighterSlice } from '../components/Fighter';
import fighterServerApi from '../components/Fighter/store/fighterServerApi';


export const store = configureStore({
  reducer: {
    [fighterServerApi.reducerPath]: fighterServerApi.reducer,
    fighter: fighterSlice.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(fighterServerApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
