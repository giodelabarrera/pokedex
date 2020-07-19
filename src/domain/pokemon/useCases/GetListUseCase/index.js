export default function GetListUseCase ({ pokemonRepository }) {
  return {
    async execute (params) {
      const pokemonList = await pokemonRepository.getList(params)
      return pokemonList
    }
  }
}
