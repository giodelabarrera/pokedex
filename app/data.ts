////////////////////////////////////////////////////////////////////////////////
// 🛑 Nothing in here has anything to do with Remix, it's just a fake database
////////////////////////////////////////////////////////////////////////////////

import { matchSorter } from "match-sorter";
// @ts-ignore - no types, but it's a tiny function
import invariant from "tiny-invariant";
import pokedexData from './pokedex-data.json'

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
// This is just a fake DB table. In a real app you'd be talking to a real db or
// fetching from an existing API.
const fakePokedex = {
  pokedex: {} as Record<string, PokemonRecord>,

  async getAll(): Promise<PokemonRecord[]> {
    return Object.keys(fakePokedex.pokedex)
      .map((key) => fakePokedex.pokedex[key])
  },

  async get(id: number): Promise<PokemonRecord | null> {
    return fakePokedex.pokedex[id] || null;
  },

  async create(values: PokemonMutation): Promise<PokemonRecord> {
    const id = values.id
    invariant(id, `No id found for ${id}`);
    const newPokemon = { id, ...values };
    fakePokedex.pokedex[id] = newPokemon;
    return newPokemon;
  },
};

////////////////////////////////////////////////////////////////////////////////
// Handful of helper functions to be called from route loaders and actions
export async function getPokedex(query?: string | null) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  let pokedex = await fakePokedex.getAll();
  if (query) {
    pokedex = matchSorter(pokedex, query, {
      keys: ["first", "last"],
    });
  }
  // return pokedex.sort(sortBy("last", "createdAt"));
  return pokedex
}

// export async function createEmptyContact() {
//   const contact = await fakeContacts.create({});
//   return contact;
// }

export async function getPokemon(id: number) {
  return fakePokedex.get(id);
}

// export async function updateContact(id: string, updates: ContactMutation) {
//   const contact = await fakeContacts.get(id);
//   if (!contact) {
//     throw new Error(`No contact found for ${id}`);
//   }
//   await fakeContacts.set(id, { ...contact, ...updates });
//   return contact;
// }

// export async function deleteContact(id: string) {
//   fakeContacts.destroy(id);
// }


pokedexData.forEach((pokemon) => {
  fakePokedex.create(pokemon);
});
