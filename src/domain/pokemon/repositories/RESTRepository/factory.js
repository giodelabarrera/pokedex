import RESTRepository from './index'
import PokemonResponseJsonToPokemonEntityJsonMapperFactory from '../../mappers/PokemonResponseJsonToPokemonEntityJsonMapper/factory'
import PokemonEntityFactory from '../../entity/Pokemon/factory'

const apiURL = 'http://pokedex-api-elb-1439135411.us-east-2.elb.amazonaws.com'

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
