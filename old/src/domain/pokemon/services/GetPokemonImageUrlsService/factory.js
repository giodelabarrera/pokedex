import GetPokemonImageUrlsService from '.'

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL

export default function createGetPokemonImageUrlsService() {
  return GetPokemonImageUrlsService({
    baseImageUrl: IMAGE_BASE_URL
  })
}
