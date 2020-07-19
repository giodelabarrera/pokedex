import RESTRepositoryFactory from '../../repositories/RESTRepository/factory'
import GetListUseCase from '.'

export default () => {
  return GetListUseCase({ pokemonRepository: RESTRepositoryFactory() })
}
