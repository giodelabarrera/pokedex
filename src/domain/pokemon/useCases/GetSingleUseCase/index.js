export default function GetSingleUseCase({pokemonRepository}) {
  return {
    async execute(idOrName) {
      const pokemon = await pokemonRepository.getSingle(idOrName)
      return pokemon
    },
  }
}
