export default function RESTRepository({
  httpClient,
  pokemonJsonResponseToPokemonEntityJsonMapper,
  pokemonEntityFactory
}) {
  async function getPokemon({idOrSlug}) {
    const pokemonResponseJson = await httpClient(`pokemon/${idOrSlug}`)
    const pokemonEntityJson = pokemonJsonResponseToPokemonEntityJsonMapper.map(
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

    // TODO: refactor with mapper new response

    // map from REST response json list to pokemon domain entity json list
    const pokemonEntityJsonList = pokemonResponseJsonList.results.map(
      pokemonJsonResponseToPokemonEntityJsonMapper.map
    )

    const pokemonEntityList = pokemonEntityJsonList.map(pokemonEntityFactory)
    return {
      total: pokemonResponseJsonList.total,
      results: pokemonEntityList
    }
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
