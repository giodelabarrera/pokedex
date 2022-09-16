import GetPokemonSlugServiceFactory from '../factory'

test('should generate slug for Nidoran♂ pokemon', () => {
  const expectedPokemonSlug = 'nidoran♂'

  const getPokemonSlugService = GetPokemonSlugServiceFactory()
  const pokemonName = 'Nidoran♂'
  const pokemonSlug = getPokemonSlugService.execute({pokemonName})

  expect(pokemonSlug).toBe(expectedPokemonSlug)
})

test('should generate slug for Nidoran♀ pokemon', () => {
  const expectedPokemonSlug = 'nidoran♀'

  const getPokemonSlugService = GetPokemonSlugServiceFactory()
  const pokemonName = 'Nidoran♀'
  const pokemonSlug = getPokemonSlugService.execute({pokemonName})

  expect(pokemonSlug).toBe(expectedPokemonSlug)
})
