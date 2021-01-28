import PokemonListJsonResponseToPokemonListValueObjectJsonMapper from '.'
import PokemonJsonResponseToPokemonEntityJsonMapperFactory from '../../mappers/PokemonJsonResponseToPokemonEntityJsonMapper/factory'

export default function createPokemonListJsonResponseToPokemonListValueObjectJsonMapper() {
  return PokemonListJsonResponseToPokemonListValueObjectJsonMapper({
    pokemonJsonResponseToPokemonEntityJsonMapper: PokemonJsonResponseToPokemonEntityJsonMapperFactory()
  })
}
