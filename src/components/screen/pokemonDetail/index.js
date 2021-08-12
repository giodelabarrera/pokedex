// import React, {useCallback} from 'react'
import React from 'react'
import {useParams} from 'react-router-dom'

// import {useDomain} from 'context/domain'
// import useAsync from 'hooks/useAsync'

import PokemonDetail, {
  PokemonDetailContentLoader
} from 'components/pokemon/detail'
import ErrorFeedback from 'components/feedback/error'
import {useGetPokemonQuery} from 'services/pokemon'

const baseClass = 'pk-ScreenPokemonDetail'

export default function ScreenPokemonDetail() {
  // const domain = useDomain()
  // const {idOrSlug} = useParams()

  // const fetchGetPokemonUseCase = useCallback(
  //   () => domain.get('pokemon__get_pokemon_use_case').execute({idOrSlug}),
  //   [domain, idOrSlug]
  // )

  // const {data, isLoading, error} = useAsync(fetchGetPokemonUseCase)

  // return (
  //   <div className={baseClass}>
  //     {isLoading && <PokemonDetailContentLoader />}
  //     {error && <ErrorFeedback error={error} />}
  //     {data && <PokemonDetail pokemon={data} />}
  //   </div>
  // )

  const {idOrSlug} = useParams()

  const {data, isLoading, error} = useGetPokemonQuery(idOrSlug)

  return (
    <div className={baseClass}>
      {isLoading && <PokemonDetailContentLoader />}
      {error && <ErrorFeedback error={error} />}
      {/*data && <PokemonDetail pokemon={data} />} */}
      {data && JSON.stringify(data, null, 2)}
    </div>
  )
}
