////////////////////////////////////////////////////////////////////////////////
// 🛑 Nothing in here has anything to do with Remix, it's just a fake database
////////////////////////////////////////////////////////////////////////////////

// import { matchSorter } from "match-sorter";
// @ts-ignore - no types, but it's a tiny function
// import invariant from "tiny-invariant";
import * as pokedexUtils from './utils.js'

// @todo
type PokemonMutation = {
  id?: number;
  name?: {
    english?: string,
    japanese?: string,
    chinese?: string,
    french?: string,
  };
  type?: string[],
  base?: {
    "HP"?: number,
    "Attack"?: number,
    "Defense"?: number,
    "Sp. Attack"?: number,
    "Sp. Defense"?: number,
    "Speed"?: number,
  }
};

export type PokemonRecord = PokemonMutation & {
  id: number;
};

////////////////////////////////////////////////////////////////////////////////
// Handful of helper functions to be called from route loaders and actions
export async function getPokemonList({
  query = '',
  types = [],
  sort = 'lowest_number',
  limit = 12,
  offset = 0 }: { query?: string, types?: any, sort?: any, limit?: any, offset?: any } = {}) {
  const params = { query, types, sort }
  if (typeof limit !== 'undefined') params.limit = Number(limit)
  if (typeof offset !== 'undefined') params.offset = Number(offset)

  const pokemonListJson = await pokedexUtils.search(params)
  const pokemonList = mapPokemonListJsonToPokemonList(pokemonListJson)
  const results = pokemonList.items.map(pokemon => {
    const slug = getPokemonSlug(pokemon.name)
    const numberString = pokemon.id.toString().padStart(3, '0')
    const imageUrls = getPokemonImageUrls(numberString)
    return {
      ...pokemon,
      number: numberString,
      imageUrl: imageUrls.small,
      slug
    }
  })
  return {
    total: pokemonList.total,
    results
  }
}

function mapPokemonListJsonToPokemonList(pokemonListJson) {
  const { results, total } = pokemonListJson
  const pokemonList = results.map(mapPokemonJsonToPokemonItem)
  return {
    total,
    items: pokemonList
  }
}

export async function getPokemonItem(idOrName: number | string) {
  const pokemonJson = await pokedexUtils.read(idOrName) as PokemonRecord
  const pokemonBaseItem = mapPokemonJsonToPokemonItem(pokemonJson)
  const numberString = pokemonJson.id.toString().padStart(3, '0')
  const slug = getPokemonSlug(pokemonBaseItem.name)
  const imageUrls = getPokemonImageUrls(numberString)
  return {
    ...pokemonBaseItem,
    number: numberString,
    imageUrl: imageUrls.large,
    slug
  }
}

function mapPokemonJsonToPokemonItem(pokemonJson) {
  function mapTranslationsOfNameToName(translationsOfName) {
    const { english: name } = translationsOfName
    return name
  }

  function mapTypesToLowerCase(types) {
    return types.map(type => type.toLowerCase())
  }

  function mapStatsKeysToSnakeCase(stats) {
    return {
      hp: stats['HP'],
      attack: stats['Attack'],
      defense: stats['Defense'],
      special_attack: stats['Sp. Attack'],
      special_defense: stats['Sp. Defense'],
      speed: stats['Speed']
    }
  }

  return {
    id: pokemonJson.id,
    name: mapTranslationsOfNameToName(pokemonJson.name),
    types: mapTypesToLowerCase(pokemonJson.type),
    stats: mapStatsKeysToSnakeCase(pokemonJson.base)
  }
}

function getPokemonSlug(pokemonName: string) {
  /* eslint-disable no-useless-escape */
  function slugify(text: string) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text
  }
  /* eslint-enable no-useless-escape */
  return slugify(pokemonName)
}

function getPokemonImageUrls(pokemonNumber: string) {
  const baseImageUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex"
  return {
    large: `${baseImageUrl}/full/${pokemonNumber}.png`,
    small: `${baseImageUrl}/detail/${pokemonNumber}.png`
  }
}


