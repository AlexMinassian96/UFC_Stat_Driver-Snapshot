import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFighters } from './thunks/fetchFighters';
import { FighterState, IFighter } from './types';

const initialState: FighterState = {
  status: "IDLE",
  fighers: [] as IFighter[],
  fighterCards: [] as number[],
};

export const fighterSlice = createSlice({
    name: 'fighters',
    initialState,
    reducers: {
    }
  });
  
export default fighterSlice;
