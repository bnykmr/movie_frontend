import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



const initialState = {
  show: false
};


export const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    changeShow: (state, action) => {
      state.show = action.payload;
    }
  }
});

const api_key = '2a0f926961d00c667e191a21c14461f8';

export const movieSlice = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  tagTypes: ['movie'],
  endpoints: (builder) => ({
    getMoviesCategory: builder.query({
      query: (query) => ({
        url: `/movie/${query}`,
        params: {
          api_key: api_key
        }
      })
    }),

    getSearchMovies: builder.query({
      query: (searchText) => ({
        url: '/search/movie',
        params: {
          api_key: api_key,
          query: searchText
        }
      })
    }),

    getMovieId: builder.query({
      query: (movieId) => ({
        url: `/movie/${movieId}/videos`,
        params: {
          api_key: api_key,

        }
      })
    })

  })
});


export const { useGetMoviesCategoryQuery, useGetSearchMoviesQuery, useGetMovieIdQuery } = movieSlice;
export const { changeShow } = showSlice.actions;
export default showSlice;