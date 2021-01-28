import RESTRepositoryFactory from '../../repositories/RESTRepository/factory'
import GetPokemonImageUrlsServiceFactory from '../../services/GetPokemonImageUrlsService/factory'
import GetPokemonSlugServiceFactory from '../../services/GetPokemonSlugService/factory'
import GetPokemonUseCase from '.'

export default function createGetPokemonUseCase() {
  return GetPokemonUseCase({
    pokemonRepository: RESTRepositoryFactory(),
    getPokemonImageUrlsService: GetPokemonImageUrlsServiceFactory(),
    getPokemonSlugService: GetPokemonSlugServiceFactory()
  })
}
