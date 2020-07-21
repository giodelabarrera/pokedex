import GetPokemonImageUrlsService from '.'

const BASE_IMAGE_URL = 'https://assets.pokemon.com/assets/cms2/img/pokedex'

export default () => {
  return GetPokemonImageUrlsService({
    baseImageUrl: BASE_IMAGE_URL
  })
}
