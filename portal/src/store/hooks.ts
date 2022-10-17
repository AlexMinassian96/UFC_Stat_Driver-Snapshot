import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// <button onClick={() => dispatch(fetchFighters()).unwrap().then((list) => dispatch(addFighters(list)))}>Search</button>


