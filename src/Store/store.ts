import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  characterApi,
  episodeApi,
  oneCharacterApi,
  oneEpisodeApi,
} from './RickMortyApi/rick-morty';
import { eachCharacterReducer } from './Slices/episodeCharacterSlice';

const store = configureStore({
  reducer: {
    [characterApi.reducerPath]: characterApi.reducer,
    [oneCharacterApi.reducerPath]: oneCharacterApi.reducer,
    [episodeApi.reducerPath]: episodeApi.reducer,
    [oneEpisodeApi.reducerPath]: oneEpisodeApi.reducer,
    episodeCharacter: eachCharacterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      characterApi.middleware,
      oneCharacterApi.middleware,
      episodeApi.middleware,
      oneEpisodeApi.middleware
    ),
});

setupListeners(store.dispatch);

// типизируем стор
export default store;
export type TypeRootState = ReturnType<typeof store.getState>;
