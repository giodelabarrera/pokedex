import RESTRepositoryFactory from '../../repositories/RESTRepository/factory'
import GetTypeListUseCase from '.'

export default () => {
  return GetTypeListUseCase({pokemonRepository: RESTRepositoryFactory()})
}
