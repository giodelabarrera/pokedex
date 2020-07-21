export default function GetPokemonListUseCase({
  pokemonRepository,
  getPokemonImageUrlsService
}) {
  return {
    async execute(params) {
      const pokemonEntityList = await pokemonRepository.getPokemonList(params)
      return pokemonEntityList.map(pokemonEntity => {
        const imageUrls = getPokemonImageUrlsService.execute({
          pokemonNumber: pokemonEntity.number()
        })
        return {
          ...pokemonEntity.toJson(),
          imageUrl: imageUrls.small
        }
      })
    }
  }
}
