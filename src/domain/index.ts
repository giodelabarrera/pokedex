import createDomain from "./createDomain";

const useCases = {
  'pokemon__get_pokemon_list_use_case': () =>
    import("./pokemon/useCases/GetPokemonListUseCase/factory"),
  'pokemon__get_pokemon_use_case': () =>
    import("./pokemon/useCases/GetPokemonUseCase/factory"),
};

const domain = createDomain(useCases)

export type Domain = typeof domain

export default domain

