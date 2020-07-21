export default function GetPokemonUseCase({
  pokemonRepository,
  getPokemonImageUrlsService,
  getPokemonSlugService
}) {
  return {
    async execute({idOrName}) {
      const pokemonEntity = await pokemonRepository.getPokemon({idOrName})
      const slug = getPokemonSlugService.execute({
        pokemonName: pokemonEntity.name
      })
      const imageUrls = getPokemonImageUrlsService.execute({
        pokemonNumber: pokemonEntity.number()
      })
      return {
        ...pokemonEntity.toJson(),
        imageUrl: imageUrls.large,
        slug
      }
    }
  }
}
