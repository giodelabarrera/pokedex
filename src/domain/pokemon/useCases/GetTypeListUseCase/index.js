export default function GetTypeListUseCase({pokemonRepository}) {
  return {
    async execute() {
      const typeList = await pokemonRepository.getTypeList()
      return typeList
    }
  }
}
