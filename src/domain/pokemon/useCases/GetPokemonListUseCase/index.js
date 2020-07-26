export default function GetPokemonListUseCase({
  pokemonRepository,
  getPokemonImageUrlsService,
  getPokemonSlugService
}) {
  return {
    async execute(params) {
      const pokemonEntityList = await pokemonRepository.getPokemonList(params)
      const results = pokemonEntityList.results.map(pokemonEntity => {
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
        total: pokemonEntityList.total,
        results
      }
    }
  }
}
