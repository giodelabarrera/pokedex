export default function GetPokemonUseCase({
  pokemonRepository,
  getPokemonImageUrlsService
}) {
  return {
    async execute({idOrName}) {
      const pokemonEntity = await pokemonRepository.getPokemon({idOrName})
      const imageUrls = getPokemonImageUrlsService.execute({
        pokemonNumber: pokemonEntity.number()
      })
      return {
        ...pokemonEntity.toJson(),
        imageUrl: imageUrls.large
      }
    }
  }
}
