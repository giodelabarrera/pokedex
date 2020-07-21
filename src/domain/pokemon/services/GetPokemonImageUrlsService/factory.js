import GetPokemonImageUrlsService from '.'

const IMAGE_BASE_URL = 'https://assets.pokemon.com/assets/cms2/img/pokedex'

export default () => {
  return GetPokemonImageUrlsService({
    baseImageUrl: IMAGE_BASE_URL
  })
}
