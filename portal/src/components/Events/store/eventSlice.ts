import { createSlice } from '@reduxjs/toolkit';
import { EventState, IEvent } from './types';

const initialState: EventState = {
  status: 'IDLE',
  events: [] as IEvent[],
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {

  },
});

export default eventSlice;
