export default function PokemonJsonToPokemonEntityMapper({
  pokemonEntityFactory
}) {
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

  function generateNumber(id) {
    return id.toString().padStart(3, '0')
  }

  return {
    map(pokemonJson) {
      const {
        id,
        name: originName,
        type: originType,
        base: originBase
      } = pokemonJson

      const name = mapTranslationsOfNameToName(originName)
      const number = generateNumber(id)
      const types = mapTypesToLowerCase(originType)
      const stats = mapStatsKeysToSnakeCase(originBase)

      const pokemonEntity = pokemonEntityFactory({
        id,
        number,
        name,
        types,
        stats
      })
      return pokemonEntity
    }
  }
}
