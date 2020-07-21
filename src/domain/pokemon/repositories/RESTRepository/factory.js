import RESTRepository from './index'
import PokemonJsonToPokemonEntityMapperFactory from '../../mappers/PokemonJsonToPokemonEntityMapper/factory'

const apiURL = 'http://localhost:3030'

function httpClient(endpoint, {...customConfig} = {}) {
  const config = {method: 'GET', ...customConfig}
  return window.fetch(`${apiURL}/${endpoint}`, config).then(async response => {
    if (!response.ok) return Promise.reject(response)
    const data = await response.json()
    return data
  })
}

export default () => {
  return RESTRepository({
    httpClient,
    pokemonJsonToPokemonEntityMapper: PokemonJsonToPokemonEntityMapperFactory()
  })
}
