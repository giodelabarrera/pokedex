import React from 'react'
import {useParams} from 'react-router-dom'

import PokemonDetail, {
  PokemonDetailContentLoader
} from 'components/pokemon/detail'
import ErrorFeedback from 'components/feedback/error'
import {usePokemonQuery} from 'utils/pokemon'

const baseClass = 'pk-ScreenPokemonDetail'

export default function ScreenPokemonDetail() {
  const {idOrSlug} = useParams()
  const {data, loading, error} = usePokemonQuery(idOrSlug)

  return (
    <div className={baseClass}>
      {loading && <PokemonDetailContentLoader />}
      {error && <ErrorFeedback error={error} />}
      {data && <PokemonDetail pokemon={data} />}
    </div>
  )
}
