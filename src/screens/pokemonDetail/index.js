import React, {useCallback} from 'react'
import {useParams} from 'react-router-dom'

import {useDomain} from 'context/domain'
import useAsync from 'hooks/useAsync'
import PokemonDetail from 'components/pokemon/detail'

import './index.scss'

const baseClass = 'pk-PokemonDetailScreen'

function PokemonDetailScreen() {
  const domain = useDomain()
  const {idOrSlug} = useParams()

  const fetchGetPokemonUseCase = useCallback(() => {
    return domain
      .get('pokemon__get_pokemon_use_case')
      .execute({idOrName: idOrSlug})
  }, [domain, idOrSlug])

  const {data, isLoading, error} = useAsync(fetchGetPokemonUseCase)

  return (
    <div className={baseClass}>
      {isLoading && <span>Loading...</span>}
      {error && <span>{error.message}</span>}
      {data && <PokemonDetail pokemon={data} />}
    </div>
  )
}

export default PokemonDetailScreen