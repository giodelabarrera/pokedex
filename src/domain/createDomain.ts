type UseCases<T> = {
  [key in keyof T]: () => Promise<any>
}

type DomainUseCase = {
  execute: (params: unknown) => Promise<unknown>
}

type Domain<UseCaseNames> = {
  get: (useCaseName: UseCaseNames) => DomainUseCase
}

function createDomain<T>(useCases: UseCases<T>) {
  const domain: Domain<keyof typeof useCases> = {
    get: (useCaseName) => ({
      async execute(...params) {
        const { default: useCaseFactory } = await useCases[useCaseName]();
        return useCaseFactory().execute(...params);
      },
    })
  }
  return domain
};

export default createDomain;
