export default function GetPokemonUseCase({pokemonRepository}) {
  return {
    async execute(idOrName) {
      const pokemon = await pokemonRepository.getSingle(idOrName)
      return pokemon
    }
  }
}
