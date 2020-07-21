import RESTRepositoryFactory from '../../repositories/RESTRepository/factory'
import GetPokemonSlugServiceFactory from '../../services/GetPokemonSlugService/factory'
import GetPokemonImageUrlsServiceFactory from '../../services/GetPokemonImageUrlsService/factory'
import GetPokemonListUseCase from '.'

export default () => {
  return GetPokemonListUseCase({
    pokemonRepository: RESTRepositoryFactory(),
    getPokemonImageUrlsService: GetPokemonImageUrlsServiceFactory(),
    getPokemonSlugService: GetPokemonSlugServiceFactory()
  })
}
