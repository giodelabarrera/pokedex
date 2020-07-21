export default function GetPokemonUseCase({pokemonRepository}) {
  return {
    async execute({idOrName}) {
      const pokemon = await pokemonRepository.getPokemon({idOrName})
      return pokemon
    }
  }
}
