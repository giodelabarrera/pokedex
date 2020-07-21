import RESTRepositoryFactory from '../../repositories/RESTRepository/factory'
import GetPokemonUseCase from '.'

export default () => {
  return GetPokemonUseCase({pokemonRepository: RESTRepositoryFactory()})
}
