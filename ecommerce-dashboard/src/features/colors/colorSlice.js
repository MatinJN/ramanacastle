import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  colors: [],
  loading: false,
};

export const fetchAllColors = createAsyncThunk("colors/getAPI", async () => {
  const response = await axios.get("http://irp.ramanacastle.com/api/color");

  return response.data.data;
});
export const createColor = createAsyncThunk("colors/postAPI", async (payload) => {
  const response = await axios.post("http://irp.ramanacastle.com/api/color/store", payload);
  return response.data.data;
});
export const deleteColor = createAsyncThunk("colors/putAPI", async (payload) => {
  const response = await axios.delete(`http://irp.ramanacastle.com/api/delete/color/${payload}`);

  return response.data.data;
});


export const colorSlice = createSlice({
  name: "colors",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllColors.fulfilled, (state, action) => {
      state.colors = action.payload
    })
  },

});


export default colorSlice.reducer;
