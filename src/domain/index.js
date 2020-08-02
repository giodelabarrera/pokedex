const USE_CASES = {
  pokemon__get_pokemon_list_use_case: () =>
    import(
      /* webpackChunkName: "[request]-factory" */ `./pokemon/useCases/GetPokemonListUseCase/factory`
    ),
  pokemon__get_pokemon_use_case: () =>
    import(
      /* webpackChunkName: "[request]-factory" */ `./pokemon/useCases/GetPokemonUseCase/factory`
    )
}

const entryPoint = {
  get: useCaseName => {
    return {
      async execute(...params) {
        const {default: useCaseFactory} = await USE_CASES[useCaseName]()
        // eslint-disable-next-line
        return useCaseFactory().execute(...params)
      }
    }
  }
}

export default entryPoint
