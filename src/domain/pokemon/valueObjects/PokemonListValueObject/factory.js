import PokemonListValueObject from '.'
import PokemonEntityFactory from '../../entity/Pokemon/factory'

export default function createPokemonListValueObject({total, items}) {
  const pokemonEntitities = items.map(PokemonEntityFactory)
  return PokemonListValueObject({total, items: pokemonEntitities})
}
