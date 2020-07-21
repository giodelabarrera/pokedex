export default function RESTRepository({
  httpClient,
  pokemonJsonToPokemonEntityMapper
}) {
  return {
    async getPokemon({idOrName}) {
      const pokemonJson = await httpClient(`pokemon/${idOrName}`)
      const pokemonEntity = pokemonJsonToPokemonEntityMapper.map(pokemonJson)
      return pokemonEntity
    },
    async getPokemonList({
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
      const pokemonListJson = await httpClient(endpoint)
      const pokemonList = pokemonListJson.map(
        pokemonJsonToPokemonEntityMapper.map
      )
      return pokemonList
    },
    async getTypeList() {
      const typeList = await httpClient('type')
      return typeList
    }
  }
}
