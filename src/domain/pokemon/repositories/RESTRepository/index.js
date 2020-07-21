export default function RESTRepository({
  httpClient,
  pokemonResponseJsonToPokemonEntityJsonMapper,
  pokemonEntityFactory
}) {
  async function getPokemon({idOrName}) {
    const pokemonResponseJson = await httpClient(`pokemon/${idOrName}`)
    const pokemonEntityJson = pokemonResponseJsonToPokemonEntityJsonMapper.map(
      pokemonResponseJson
    )
    const pokemonEntity = pokemonEntityFactory(pokemonEntityJson)
    return pokemonEntity
  }

  async function getPokemonList({
    query = '',
    types = [],
    sort = 'lowest_number',
    limit = 12,
    offset = 0
  } = {}) {
    function toQueryString({query, types, sort, limit, offset}) {
      const searchParams = new URLSearchParams()
      if (query) searchParams.append('query', query)
      if (types.length)
        types.forEach(type => searchParams.append('types[]', type))
      searchParams.append('sort', sort)
      searchParams.append('limit', limit)
      searchParams.append('offset', offset)
      return searchParams.toString()
    }

    const params = {query, types, sort, limit, offset}
    const queryString = toQueryString(params)
    const endpoint = 'pokemon' + (queryString && `?${queryString}`)
    const pokemonResponseJsonList = await httpClient(endpoint)

    // map from REST response json list to pokemon domain entity json list
    const pokemonEntityJsonList = pokemonResponseJsonList.map(
      pokemonResponseJsonToPokemonEntityJsonMapper.map
    )
    const pokemonEntityList = pokemonEntityJsonList.map(pokemonEntityFactory)
    return pokemonEntityList
  }

  async function getTypeList() {
    const typeList = await httpClient('type')
    return typeList
  }

  return {
    getPokemon,
    getPokemonList,
    getTypeList
  }
}
