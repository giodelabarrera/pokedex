export default function GetPokemonListUseCase({pokemonRepository}) {
  return {
    async execute(params) {
      const pokemonList = await pokemonRepository.getPokemonList(params)
      return pokemonList
    }
  }
}
