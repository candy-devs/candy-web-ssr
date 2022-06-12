import { createSlice } from "@reduxjs/toolkit";

export type UserDataType = {
  name: string,
  email: string,
  picture: string,
};

const initialState: UserDataType = { name: "", email: "", picture: "" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set: (state: UserDataType, action: any) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.picture = action.payload.picture;
    },
  },
});

export const { set }: any = userSlice.actions;
export default userSlice.reducer;
