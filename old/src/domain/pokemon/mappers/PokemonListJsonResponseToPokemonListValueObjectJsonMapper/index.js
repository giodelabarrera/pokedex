export default function PokemonListJsonResponseToPokemonListValueObjectJsonMapper({
  pokemonJsonResponseToPokemonEntityJsonMapper
}) {
  return {
    map(pokemonListJsonResponse) {
      const {results, total} = pokemonListJsonResponse

      const pokemonEntityJsonList = results.map(
        pokemonJsonResponseToPokemonEntityJsonMapper.map
      )

      return {
        total,
        items: pokemonEntityJsonList
      }
    }
  }
}
