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
    })
  })
})

export const {useGetPokemonQuery} = pokemonApi
