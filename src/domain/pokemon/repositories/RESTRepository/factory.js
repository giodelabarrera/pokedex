import RESTRepository from './index'
import PokemonJsonResponseToPokemonEntityJsonMapperFactory from '../../mappers/PokemonJsonResponseToPokemonEntityJsonMapper/factory'
import PokemonEntityFactory from '../../entity/Pokemon/factory'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

function httpClient(endpoint, {...customConfig} = {}) {
  const config = {method: 'GET', ...customConfig}
  return window
    .fetch(`${API_BASE_URL}/${endpoint}`, config)
    .then(async response => {
      if (!response.ok) return Promise.reject(response)
      const data = await response.json()
      return data
    })
}

export default () => {
  return RESTRepository({
    httpClient,
    pokemonJsonResponseToPokemonEntityJsonMapper: PokemonJsonResponseToPokemonEntityJsonMapperFactory(),
    pokemonEntityFactory: PokemonEntityFactory
  })
}
