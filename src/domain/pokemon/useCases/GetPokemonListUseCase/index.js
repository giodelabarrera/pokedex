export default function GetPokemonListUseCase({pokemonRepository}) {
  return {
    async execute(params) {
      const pokemonList = await pokemonRepository.getList(params)
      return pokemonList
    }
  }
}
