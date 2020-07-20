const USE_CASES = {
  pokemon__get_list_use_case: () =>
    import(
      /* webpackChunkName: "pokemon__get_list_use_case" */
      './pokemon/useCases/GetListUseCase/factory'
    ),
  pokemon__get_single_use_case: () =>
    import(
      /* webpackChunkName: "pokemon__get_single_use_case" */
      './pokemon/useCases/GetSingleUseCase/factory'
    ),
  pokemon__get_types_use_case: () =>
    import(
      /* webpackChunkName: "pokemon__get_types_use_case" */
      './pokemon/useCases/GetTypesUseCase/factory'
    ),
}

const entryPoint = {
  get: useCaseName => {
    return {
      async execute(...params) {
        const {default: useCaseFactory} = await USE_CASES[useCaseName]()
        // eslint-disable-next-line
        return useCaseFactory().execute(...params)
      },
    }
  },
}

export default entryPoint
