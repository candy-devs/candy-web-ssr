import { createSlice } from "@reduxjs/toolkit";

const initialState = {value : 0};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: any) => { state.value += 1 },
    decrement: (state: any) => { state.value -= 1 },
  }
});

export const { increment, decrement }: any = counterSlice.actions;
export default counterSlice.reducer;