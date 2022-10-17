import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../../TempDB";
import { IFighter } from "../types";

export const fetchFighters = createAsyncThunk<IFighter[]>(
    "event/fetchFighters",
    async () => {
        const response: IFighter[] = await getData<IFighter[]>("Fighters");
        return response;
    }
)
