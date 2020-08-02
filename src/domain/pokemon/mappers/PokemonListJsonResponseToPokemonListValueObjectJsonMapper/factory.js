import PokemonListJsonResponseToPokemonListValueObjectJsonMapper from '.'
import PokemonJsonResponseToPokemonEntityJsonMapperFactory from '../../mappers/PokemonJsonResponseToPokemonEntityJsonMapper/factory'

export default () => {
  return PokemonListJsonResponseToPokemonListValueObjectJsonMapper({
    pokemonJsonResponseToPokemonEntityJsonMapper: PokemonJsonResponseToPokemonEntityJsonMapperFactory()
  })
}
