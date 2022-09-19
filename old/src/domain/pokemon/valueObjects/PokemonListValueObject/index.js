export default function PokemonListValueObject({total, items}) {
  function toJson() {
    const pokemonJsonList = items.map(pokemonEntity => pokemonEntity.toJson())
    return {
      total,
      items: pokemonJsonList
    }
  }

  return {
    total,
    items,
    toJson
  }
}
