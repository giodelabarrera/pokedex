import {createApi} from '@reduxjs/toolkit/query/react'

import domain from '../domain'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  endpoints: builder => ({
    getPokemon: builder.query({
      async queryFn(arg, queryApi, extraOptions, baseQuery) {
        try {
          const response = await domain
            .get('pokemon__get_pokemon_use_case')
            .execute({idOrSlug: arg})
          return {data: response}
        } catch (error) {
          return {error}
        }
      }
    }),
    listPokemon: builder.query({
      async queryFn(
        {query, limit, sort, offset},
        queryApi,
        extraOptions,
        baseQuery
      ) {
        try {
          const response = await domain
            .get('pokemon__get_pokemon_list_use_case')
            .execute({query, limit, sort, offset})
          return {data: response}
        } catch (error) {
          return {error}
        }
      }
    })
  })
})

export const {useGetPokemonQuery, useListPokemonQuery} = pokemonApi
