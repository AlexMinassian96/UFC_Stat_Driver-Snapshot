import { FetchStatus } from '../../../types';

export interface IEvent {
  id: number;
  type: string;
  fighters: string;
  date: string;
};

export type EventState = {
  status: FetchStatus
  events: IEvent[];
};
