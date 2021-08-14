import {createApi} from '@reduxjs/toolkit/query/react'

import domain from '../domain'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  endpoints: builder => ({
    pokemon: builder.query({
      queryFn(idOrSlug) {
        return domain
          .get('pokemon__get_pokemon_use_case')
          .execute({idOrSlug})
          .then(
            response => ({data: response}),
            error => ({error})
          )
      }
    }),
    searchPokemon: builder.query({
      queryFn({query, limit, sort, offset}) {
        return domain
          .get('pokemon__get_pokemon_list_use_case')
          .execute({query, limit, sort, offset})
          .then(
            response => ({data: response}),
            error => ({error})
          )
      }
    })
  })
})

export const {usePokemonQuery, useSearchPokemonQuery} = pokemonApi
