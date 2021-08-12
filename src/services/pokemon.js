import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// import domain from '../domain'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  // baseQuery: fetchBaseQuery({baseUrl: '/'}),
  baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
  endpoints: builder => ({
    getPokemon: builder.query({
      query: (arg, queryApi, extraOptions, baseQuery) => {
        return '/pokemon/' + arg
      }
    })
  })
})

export const {useGetPokemonQuery} = pokemonApi
