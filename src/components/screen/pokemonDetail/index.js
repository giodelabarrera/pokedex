import React from 'react'
import {useParams} from 'react-router-dom'

import PokemonDetail, {
  PokemonDetailContentLoader
} from 'components/pokemon/detail'
import ErrorFeedback from 'components/feedback/error'
import {usePokemonQuery} from 'services/pokemon'

const baseClass = 'pk-ScreenPokemonDetail'

export default function ScreenPokemonDetail() {
  const {idOrSlug} = useParams()
  const {data, isLoading, error} = usePokemonQuery(idOrSlug)

  return (
    <div className={baseClass}>
      {isLoading && <PokemonDetailContentLoader />}
      {error && <ErrorFeedback error={error} />}
      {data && <PokemonDetail pokemon={data} />}
    </div>
  )
}
