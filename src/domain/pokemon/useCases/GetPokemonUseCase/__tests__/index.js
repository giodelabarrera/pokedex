import fetchMock from 'fetch-mock'
import GetPokemonUseCaseFactory from '../factory'

afterEach(() => {
  fetchMock.reset()
})

test('should return a pokemon by name', async () => {
  const mockPokemon = {
    id: 25,
    name: {
      english: 'Pikachu',
      japanese: 'ピカチュウ',
      chinese: '皮卡丘',
      french: 'Pikachu'
    },
    type: ['Electric'],
    base: {
      HP: 35,
      Attack: 55,
      Defense: 40,
      'Sp. Attack': 50,
      'Sp. Defense': 50,
      Speed: 90
    }
  }
  fetchMock.get('*', mockPokemon)

  const getSingleUseCase = GetPokemonUseCaseFactory()
  const idOrSlug = 'pikachu'
  const pokemon = await getSingleUseCase.execute({idOrSlug})

  expect(pokemon).toBeDefined()
  expect(pokemon).not.toBeNull()
})

test('should return a pokemon by id', async () => {
  const mockPokemon = {
    id: 25,
    name: {
      english: 'Pikachu',
      japanese: 'ピカチュウ',
      chinese: '皮卡丘',
      french: 'Pikachu'
    },
    type: ['Electric'],
    base: {
      HP: 35,
      Attack: 55,
      Defense: 40,
      'Sp. Attack': 50,
      'Sp. Defense': 50,
      Speed: 90
    }
  }
  fetchMock.get('*', mockPokemon)

  const getSingleUseCase = GetPokemonUseCaseFactory()
  const idOrSlug = '25'
  const pokemon = await getSingleUseCase.execute({idOrSlug})

  expect(pokemon).toBeDefined()
  expect(pokemon).not.toBeNull()
})

test('should fail when it happens a not found error', async () => {
  fetchMock.get('*', 404)

  const getSingleUseCase = GetPokemonUseCaseFactory()
  const idOrSlug = '25'
  await expect(getSingleUseCase.execute({idOrSlug})).rejects.toHaveProperty(
    'status',
    404
  )
})

test('should fail when it happens a server error', async () => {
  fetchMock.get('*', 500)

  const getSingleUseCase = GetPokemonUseCaseFactory()
  const idOrSlug = '25'
  await expect(getSingleUseCase.execute({idOrSlug})).rejects.toHaveProperty(
    'status',
    500
  )
})
