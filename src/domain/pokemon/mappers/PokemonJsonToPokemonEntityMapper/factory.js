import PokemonEntityFactory from '../../entity/Pokemon/factory'
import PokemonJsonToPokemonEntityMapper from '.'

export default () => {
  return PokemonJsonToPokemonEntityMapper({
    pokemonEntityFactory: PokemonEntityFactory
  })
}
