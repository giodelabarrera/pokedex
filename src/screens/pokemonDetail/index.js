import React, {useCallback} from 'react'
import {useParams} from 'react-router-dom'

import {useDomain} from 'context/domain'
import useAsync from 'hooks/useAsync'

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
      {data && (
        <>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <h1>
            Bulbasaur <span>Nº 001</span>
          </h1>
          <div>
            <img src="" />
            <div>
              <div>
                <span>Grass</span>
                <span>Poison</span>
              </div>
              <div>
                <ul>
                  <li>Atack</li>
                  <li>Atack</li>
                  <li>Atack</li>
                  <li>Atack</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default PokemonDetailScreen
