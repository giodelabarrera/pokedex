import RESTRepository from './index'
import PokemonResponseJsonToPokemonEntityJsonMapperFactory from '../../mappers/PokemonResponseJsonToPokemonEntityJsonMapper/factory'
import PokemonEntityFactory from '../../entity/Pokemon/factory'

const apiURL = 'http://ec2-3-15-46-54.us-east-2.compute.amazonaws.com:3030/'

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
    pokemonResponseJsonToPokemonEntityJsonMapper: PokemonResponseJsonToPokemonEntityJsonMapperFactory(),
    pokemonEntityFactory: PokemonEntityFactory
  })
}
