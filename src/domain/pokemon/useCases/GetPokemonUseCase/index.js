export default function GetPokemonUseCase({pokemonRepository}) {
  return {
    async execute({idOrName}) {
      const pokemonEntity = await pokemonRepository.getPokemon({idOrName})
      debugger
      return pokemonEntity
    }
  }
}
