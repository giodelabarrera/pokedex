export default function GetPokemonUseCase({
  pokemonRepository,
  getPokemonImageUrlsService,
  getPokemonSlugService
}) {
  return {
    async execute({idOrSlug}) {
      const pokemonEntity = await pokemonRepository.getPokemon({idOrSlug})
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
