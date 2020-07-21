import RESTRepositoryFactory from '../../repositories/RESTRepository/factory'
import GetPokemonImageUrlsServiceFactory from '../../services/GetPokemonImageUrlsService/factory'
import GetPokemonListUseCase from '.'

export default () => {
  return GetPokemonListUseCase({
    pokemonRepository: RESTRepositoryFactory(),
    getPokemonImageUrlsService: GetPokemonImageUrlsServiceFactory()
  })
}
