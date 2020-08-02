export default function PokemonListJsonResponseToPokemonListValueObjectJsonMapper() {
  return {
    map(pokemonListJsonResponse) {
      const {results, total} = pokemonListJsonResponse

      // const {
      //   id,
      //   name: originName,
      //   type: originType,
      //   base: originBase
      // } = pokemonResponseJson
      // const name = mapTranslationsOfNameToName(originName)
      // const types = mapTypesToLowerCase(originType)
      // const stats = mapStatsKeysToSnakeCase(originBase)
      // return {
      //   id,
      //   name,
      //   types,
      //   stats
      // }
    }
  }
}
