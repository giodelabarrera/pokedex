import RESTRepositoryFactory from '../../repositories/RESTRepository/factory'
import GetPokemonListUseCase from '.'

export default () => {
  return GetPokemonListUseCase({pokemonRepository: RESTRepositoryFactory()})
}
