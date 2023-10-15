export default function GetPokemonListUseCase({
  pokemonRepository,
  getPokemonImageUrlsService,
  getPokemonSlugService
}) {
  return {
    async execute(params) {
      const pokemonListValueObject = await pokemonRepository.getPokemonList(
        params
      )
      const results = pokemonListValueObject.items.map(pokemonEntity => {
        const slug = getPokemonSlugService.execute({
          pokemonName: pokemonEntity.name
        })
        const imageUrls = getPokemonImageUrlsService.execute({
          pokemonNumber: pokemonEntity.number()
        })
        return {
          ...pokemonEntity.toJson(),
          imageUrl: imageUrls.small,
          slug
        }
      })
      return {
        total: pokemonListValueObject.total,
        results
      }
    }
  }
}
