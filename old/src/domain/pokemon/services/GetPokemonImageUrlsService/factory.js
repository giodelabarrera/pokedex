import GetPokemonImageUrlsService from '.'

const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL

export default function createGetPokemonImageUrlsService() {
  return GetPokemonImageUrlsService({
    baseImageUrl: IMAGE_BASE_URL
  })
}
