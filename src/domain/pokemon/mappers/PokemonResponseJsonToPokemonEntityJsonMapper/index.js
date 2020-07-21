export default function PokemonResponseJsonToPokemonEntityJsonMapper() {
  function mapTranslationsOfNameToName(translationsOfName) {
    const {english: name} = translationsOfName
    return name
  }

  function mapTypesToLowerCase(types) {
    return types.map(type => type.toLowerCase())
  }

  function mapStatsKeysToSnakeCase(stats) {
    return {
      hp: stats['HP'],
      attack: stats['Attack'],
      defense: stats['Defense'],
      special_attack: stats['Sp. Attack'],
      special_defense: stats['Sp. Defense'],
      speed: stats['Speed']
    }
  }

  return {
    map(pokemonResponseJson) {
      const {
        id,
        name: originName,
        type: originType,
        base: originBase
      } = pokemonResponseJson

      const name = mapTranslationsOfNameToName(originName)
      const types = mapTypesToLowerCase(originType)
      const stats = mapStatsKeysToSnakeCase(originBase)

      return {
        id,
        name,
        types,
        stats
      }
    }
  }
}
