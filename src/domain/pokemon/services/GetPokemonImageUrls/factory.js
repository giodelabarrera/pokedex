import GetPokemonImageUrls from '.'

const IMAGE_BASE_URL = 'https://assets.pokemon.com/assets/cms2/img/pokedex'

export default () => {
  return GetPokemonImageUrls({
    baseImageUrl: IMAGE_BASE_URL
  })
}
