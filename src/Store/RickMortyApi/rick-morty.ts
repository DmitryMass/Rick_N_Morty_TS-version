import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IEpisodes, IServerEpisodeResponse } from '../../Types/episodes';
import { ICharacter, IServerResponse } from '../../Types/rick-morty-types';

const URL = 'https://rickandmortyapi.com/api/';

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    getCharacters: build.query<ICharacter[], number>({
      query: (page?: number) => ({
        url: `character/?page=${page}`,
      }),
      transformResponse: (response: IServerResponse<ICharacter>) =>
        response.results,
    }),
  }),
});

export const oneCharacterApi = createApi({
  reducerPath: 'oneCharacterApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    getOneCharacter: build.query<ICharacter, string>({
      query: (id?: string) => ({
        url: `character/${id}`,
      }),
    }),
  }),
});

export const episodeApi = createApi({
  reducerPath: 'episodeApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    getEpisodes: build.query<IEpisodes[], number>({
      query: (page?: number) => ({
        url: `episode/?page=${page}`,
      }),
      transformResponse: (response: IServerEpisodeResponse<IEpisodes>) =>
        response.results,
    }),
  }),
});

export const oneEpisodeApi = createApi({
  reducerPath: 'oneEpisodeApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    getOneEpisode: build.query<IEpisodes, string>({
      query: (id?: string) => ({
        url: `episode/${id}`,
      }),
    }),
  }),
});

export const { useGetOneCharacterQuery } = oneCharacterApi;
export const { useGetCharactersQuery } = characterApi;
export const { useGetEpisodesQuery } = episodeApi;
export const { useGetOneEpisodeQuery } = oneEpisodeApi;
