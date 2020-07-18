const USE_CASES = {
  pokemon__get_list_use_case: () =>
    import(
      /* webpackChunkName: "pokemon__get_list_use_case" */
      './tierlist/useCases/GetTierlistUseCase/factory'
    ),
  pokemon__get_single_use_case: () =>
    import(
      /* webpackChunkName: "pokemon__get_single_use_case" */
      './tierlist/useCases/GetFilteredTierlistUseCase/factory'
    ),
  pokemon__get_types_use_case: () =>
    import(
      /* webpackChunkName: "pokemon__get_types_use_case" */
      './tierlist/useCases/GetNextGameRouteUseCase/factory'
    )
}

const entryPoint = {
  get: useCaseName => {
    return {
      async execute (...params) {
        const { default: useCaseFactory } = await USE_CASES[useCaseName]()
        return useCaseFactory().execute(...params)
      }
    }
  }
}

export default entryPoint
