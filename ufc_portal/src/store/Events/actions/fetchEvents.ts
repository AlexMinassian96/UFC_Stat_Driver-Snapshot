import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../../TempDB";
import { IEvent } from "../types";

export const fetchEvents = createAsyncThunk<IEvent[]>(
    "event/fetchEvents",
    async () => {
        const response: IEvent[] = await getData<IEvent[]>("Events");
        return response;
    }
)
