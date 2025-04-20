import { db } from "../../db";

function findByIdOrName(idOrName: string) {
  const allPokemons = db.pokemon.getAll();
  const result = allPokemons.find((pokemon) => {
    const id = pokemon.id.toString();
    const name = pokemon.name.english?.toLowerCase();
    return idOrName === id || name === idOrName;
  });
  return result;
}

const SORT_TYPES = {
  lowestNumber: "lowest_number",
  highestNumber: "highest_number",
  aZ: "a_z",
  zA: "z_a",
} as const;

type SortType = (typeof SORT_TYPES)[keyof typeof SORT_TYPES];

type PokemonEntities = ReturnType<typeof db.pokemon.getAll>;
type PokemonEntity = PokemonEntities[number];

const makeFilterByQuery = (query: string) => (pokemon: PokemonEntity) => {
  if (!query) return true;
  const {
    id: originalId,
    name: { english: originalName },
  } = pokemon;
  const id = originalId.toString();
  const name = originalName!.toLowerCase();
  const cleanedQuery = query.toLowerCase().trim();
  return cleanedQuery === id || name.includes(cleanedQuery);
};

const makeFilterByTypes = (types: string[]) => (pokemon: PokemonEntity) => {
  if (!types.length) return true;
  const { type: originalTypes } = pokemon;
  return types.every((type) => originalTypes.includes(type));
};

const makeCombinedFilterPokemon =
  ({ query, types }: { query: string; types: string[] }) =>
  (pokemon: PokemonEntity) => {
    const filterByQuery = makeFilterByQuery(query);
    const filterByTypes = makeFilterByTypes(types);
    return filterByQuery(pokemon) && filterByTypes(pokemon);
  };

function sortListPokemon(sortType: SortType, listPokemon: PokemonEntities) {
  const newListPokemon = [...listPokemon];
  switch (sortType) {
    case SORT_TYPES.lowestNumber: {
      newListPokemon.sort((first, second) => (first.id > second.id ? 1 : -1));
      return newListPokemon;
    }
    case SORT_TYPES.highestNumber: {
      newListPokemon.sort((first, second) => (first.id < second.id ? 1 : -1));
      return newListPokemon;
    }
    case SORT_TYPES.aZ: {
      newListPokemon.sort((first, second) =>
        first.name.english! > second.name.english! ? 1 : -1
      );
      return newListPokemon;
    }
    case SORT_TYPES.zA: {
      newListPokemon.sort((first, second) =>
        first.name.english! < second.name.english! ? 1 : -1
      );
      return newListPokemon;
    }
    default: {
      throw new Error("sortType not found");
    }
  }
}

function paginate(list: PokemonEntities, limit: number, offset: number) {
  return list.slice(offset * limit, (offset + 1) * limit);
}

interface FindAllByOptions {
  query?: string;
  types?: string[];
  sort?: SortType;
  limit?: number;
  offset?: number;
}

function findAllBy({
  query = "",
  types = [],
  sort = SORT_TYPES.lowestNumber,
  limit = 12,
  offset = 0,
}: FindAllByOptions = {}) {
  const combinedFilterPokemon = makeCombinedFilterPokemon({ query, types });
  const filteredListPokemon = db.pokemon.getAll().filter(combinedFilterPokemon);
  const sortedListPokemon = sortListPokemon(sort, filteredListPokemon);
  return {
    total: sortedListPokemon.length,
    results: paginate(sortedListPokemon, limit, offset),
  };
}

export { findAllBy, findByIdOrName, SORT_TYPES };
export type { FindAllByOptions, SortType };
