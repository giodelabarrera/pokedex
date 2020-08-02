import PokemonListValueObject from '.'
import PokemonEntityFactory from '../../entity/Pokemon/factory'

export default ({total, items}) => {
  const pokemonEntitities = items.map(PokemonEntityFactory)
  return PokemonListValueObject({total, items: pokemonEntitities})
}
