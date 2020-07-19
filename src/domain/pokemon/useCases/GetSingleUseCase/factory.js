import RESTRepositoryFactory from '../../repositories/RESTRepository/factory'
import GetSingleUseCase from '.'

export default () => {
  return GetSingleUseCase({ pokemonRepository: RESTRepositoryFactory() })
}
