import {rest, server} from 'test/server'
import GetPokemonUseCaseFactory from '../factory'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

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
  server.use(
    rest.get(`${API_BASE_URL}/pokemon/:idOrSlug`, (req, res, ctx) =>
      res(ctx.json(mockPokemon))
    )
  )

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
  server.use(
    rest.get(`${API_BASE_URL}/pokemon/:idOrSlug`, (req, res, ctx) =>
      res(ctx.json(mockPokemon))
    )
  )

  const getSingleUseCase = GetPokemonUseCaseFactory()
  const idOrSlug = '25'
  const pokemon = await getSingleUseCase.execute({idOrSlug})

  expect(pokemon).toBeDefined()
  expect(pokemon).not.toBeNull()
})

test('should fail when it happens a not found error', async () => {
  server.use(
    rest.get(`${API_BASE_URL}/pokemon/:idOrSlug`, (req, res, ctx) =>
      res(ctx.status(404))
    )
  )

  const getSingleUseCase = GetPokemonUseCaseFactory()
  const idOrSlug = '25'
  await expect(getSingleUseCase.execute({idOrSlug})).rejects.toHaveProperty(
    'status',
    404
  )
})

test('should fail when it happens a server error', async () => {
  server.use(
    rest.get(`${API_BASE_URL}/pokemon/:idOrSlug`, (req, res, ctx) =>
      res(ctx.status(500))
    )
  )

  const getSingleUseCase = GetPokemonUseCaseFactory()
  const idOrSlug = '25'
  await expect(getSingleUseCase.execute({idOrSlug})).rejects.toHaveProperty(
    'status',
    500
  )
})
