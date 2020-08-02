export default function RESTRepository({
  httpClient,
  pokemonJsonResponseToPokemonEntityJsonMapper,
  pokemonListJsonResponseToPokemonListValueObjectJsonMapper,
  pokemonEntityFactory,
  pokemonListValueObjectFactory
}) {
  async function getPokemon({idOrSlug}) {
    const pokemonJsonResponse = await httpClient(`pokemon/${idOrSlug}`)
    const pokemonEntityJson = pokemonJsonResponseToPokemonEntityJsonMapper.map(
      pokemonJsonResponse
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
    const pokemonListJsonResponse = await httpClient(endpoint)

    const pokemonListValueObjectJson = pokemonListJsonResponseToPokemonListValueObjectJsonMapper.map(
      pokemonListJsonResponse
    )

    const pokemonListValueObject = pokemonListValueObjectFactory(
      pokemonListValueObjectJson
    )
    return pokemonListValueObject
  }

  return {
    getPokemon,
    getPokemonList
  }
}
