import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getname = createAsyncThunk("count/getname", async (req) => {
  try {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${req}`);
    return {
      id: data.id,
      name: data.name,
      phone: data.phone,
      email: data.email,
    };
  } catch (e) {
    return "ERROR";
  }
});

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 1, name: "", phone: "", arr: [], close: 1 },
  reducers: {
    increment: (state) => {
      if (state.value >= 10) {
        alert("범위는 1부터 10까지 입니다.");
      } else state.value += 1;
    },
    decrement: (state) => {
      if (state.value <= 1) {
        alert("범위는 1부터 10까지 입니다.");
      } else state.value -= 1;
    },
    changeNum: (state, action) => {
      state.value = action.payload;
    },
    close: (state, action) => {
      state.arr = state.arr.filter((i) => i.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getname.pending, () => {})
      .addCase(getname.fulfilled, (state, action) => {
        if (state.value < 1 || state.value > 10) {
          alert("범위는 1부터 10까지 입니다.");
          state.value = 0;
          state.arr = [];
        } else {
          const tmp = [...new Set(state.arr.map((i) => i.id))];
          if (tmp.includes(state.value)) {
            alert("이미 존재합니다.");
          } else state.arr.push(action.payload);
        }
      });
  },
});
export const { increment, decrement, changeNum, close } = counterSlice.actions;
export default counterSlice.reducer;
