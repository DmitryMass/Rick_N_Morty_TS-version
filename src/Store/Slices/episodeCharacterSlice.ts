import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacter } from '../../Types/rick-morty-types';

interface IInitialState {
  todo: ICharacter[] | [];
}

const initialState: IInitialState = {
  todo: [],
};

const eachCharacter = createSlice({
  name: 'eachCharacter',
  initialState,
  reducers: {
    saveCharacters: (state, action: PayloadAction<ICharacter[]>) => {
      state.todo = action.payload;
    },
  },
});

export const eachCharacterActions = eachCharacter.actions;
export const eachCharacterReducer = eachCharacter.reducer;
