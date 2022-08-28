import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "./store";

export interface counterState {
  currentValue: number;
  name?: string;
}

const initialState: counterState = {
  currentValue: 5
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.currentValue += 1;
    },
    decrement: (state) => {
      state.currentValue -= 1;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    }
  }
});
export const selectCount = (state: RootState) => state.counter.currentValue;
export const currentName = (state: RootState) => state.counter.name;
export const { increment, decrement, setName } = counterSlice.actions;

export default counterSlice.reducer;

export const PokeCall = (id: number): AppThunk => async (
  dispatch,
  getState
) => {
  const currentValue = selectCount(getState());
  console.log(currentValue);

  const fetchUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const name = await fetch(fetchUrl)
    .then((t) => t.json())
    .then((response: any) => {
      return response.name;
    });

  console.log(name);

  dispatch(setName(name));
};
