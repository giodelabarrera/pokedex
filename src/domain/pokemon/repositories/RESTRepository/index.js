export default function RESTRepository({
  httpClient,
  pokemonJsonResponseToPokemonEntityJsonMapper,
  pokemonListJsonResponseToPokemonListValueObjectJsonMapper,
  pokemonEntityFactory,
  pokemonListValueObjectFactory,
  stringify
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
    const params = {query, types, sort, limit, offset}
    const queryString = stringify(params, {arrayFormat: 'bracket'})
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
