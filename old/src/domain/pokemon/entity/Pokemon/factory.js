import PokemonEntity from '.'

export default function createPokemonEntity({id, name, types, stats}) {
  return PokemonEntity({id, name, types, stats})
}
