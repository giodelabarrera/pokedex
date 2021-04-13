import {rest} from 'msw'
import {server} from 'mocks/server'
import GetPokemonListUseCaseFactory from '../factory'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

test('should return a pokemon list', async () => {
  const mockPokemonList = {
    total: 809,
    results: [
      {
        id: 1,
        name: {
          english: 'Bulbasaur',
          japanese: 'フシギダネ',
          chinese: '妙蛙种子',
          french: 'Bulbizarre'
        },
        type: ['Grass', 'Poison'],
        base: {
          HP: 45,
          Attack: 49,
          Defense: 49,
          'Sp. Attack': 65,
          'Sp. Defense': 65,
          Speed: 45
        }
      },
      {
        id: 2,
        name: {
          english: 'Ivysaur',
          japanese: 'フシギソウ',
          chinese: '妙蛙草',
          french: 'Herbizarre'
        },
        type: ['Grass', 'Poison'],
        base: {
          HP: 60,
          Attack: 62,
          Defense: 63,
          'Sp. Attack': 80,
          'Sp. Defense': 80,
          Speed: 60
        }
      },
      {
        id: 3,
        name: {
          english: 'Venusaur',
          japanese: 'フシギバナ',
          chinese: '妙蛙花',
          french: 'Florizarre'
        },
        type: ['Grass', 'Poison'],
        base: {
          HP: 80,
          Attack: 82,
          Defense: 83,
          'Sp. Attack': 100,
          'Sp. Defense': 100,
          Speed: 80
        }
      },
      {
        id: 4,
        name: {
          english: 'Charmander',
          japanese: 'ヒトカゲ',
          chinese: '小火龙',
          french: 'Salamèche'
        },
        type: ['Fire'],
        base: {
          HP: 39,
          Attack: 52,
          Defense: 43,
          'Sp. Attack': 60,
          'Sp. Defense': 50,
          Speed: 65
        }
      },
      {
        id: 5,
        name: {
          english: 'Charmeleon',
          japanese: 'リザード',
          chinese: '火恐龙',
          french: 'Reptincel'
        },
        type: ['Fire'],
        base: {
          HP: 58,
          Attack: 64,
          Defense: 58,
          'Sp. Attack': 80,
          'Sp. Defense': 65,
          Speed: 80
        }
      },
      {
        id: 6,
        name: {
          english: 'Charizard',
          japanese: 'リザードン',
          chinese: '喷火龙',
          french: 'Dracaufeu'
        },
        type: ['Fire', 'Flying'],
        base: {
          HP: 78,
          Attack: 84,
          Defense: 78,
          'Sp. Attack': 109,
          'Sp. Defense': 85,
          Speed: 100
        }
      },
      {
        id: 7,
        name: {
          english: 'Squirtle',
          japanese: 'ゼニガメ',
          chinese: '杰尼龟',
          french: 'Carapuce'
        },
        type: ['Water'],
        base: {
          HP: 44,
          Attack: 48,
          Defense: 65,
          'Sp. Attack': 50,
          'Sp. Defense': 64,
          Speed: 43
        }
      },
      {
        id: 8,
        name: {
          english: 'Wartortle',
          japanese: 'カメール',
          chinese: '卡咪龟',
          french: 'Carabaffe'
        },
        type: ['Water'],
        base: {
          HP: 59,
          Attack: 63,
          Defense: 80,
          'Sp. Attack': 65,
          'Sp. Defense': 80,
          Speed: 58
        }
      },
      {
        id: 9,
        name: {
          english: 'Blastoise',
          japanese: 'カメックス',
          chinese: '水箭龟',
          french: 'Tortank'
        },
        type: ['Water'],
        base: {
          HP: 79,
          Attack: 83,
          Defense: 100,
          'Sp. Attack': 85,
          'Sp. Defense': 105,
          Speed: 78
        }
      },
      {
        id: 10,
        name: {
          english: 'Caterpie',
          japanese: 'キャタピー',
          chinese: '绿毛虫',
          french: 'Chenipan'
        },
        type: ['Bug'],
        base: {
          HP: 45,
          Attack: 30,
          Defense: 35,
          'Sp. Attack': 20,
          'Sp. Defense': 20,
          Speed: 45
        }
      },
      {
        id: 11,
        name: {
          english: 'Metapod',
          japanese: 'トランセル',
          chinese: '铁甲蛹',
          french: 'Chrysacier'
        },
        type: ['Bug'],
        base: {
          HP: 50,
          Attack: 20,
          Defense: 55,
          'Sp. Attack': 25,
          'Sp. Defense': 25,
          Speed: 30
        }
      },
      {
        id: 12,
        name: {
          english: 'Butterfree',
          japanese: 'バタフリー',
          chinese: '巴大蝶',
          french: 'Papilusion'
        },
        type: ['Bug', 'Flying'],
        base: {
          HP: 60,
          Attack: 45,
          Defense: 50,
          'Sp. Attack': 90,
          'Sp. Defense': 80,
          Speed: 70
        }
      }
    ]
  }
  server.use(
    rest.get(`${API_BASE_URL}/pokemon`, async (req, res, ctx) => {
      return res(ctx.json(mockPokemonList))
    })
  )

  const getListUseCase = GetPokemonListUseCaseFactory()
  const pokemonList = await getListUseCase.execute()

  expect(pokemonList.total).toBeGreaterThanOrEqual(0)
  expect(pokemonList.results).toBeInstanceOf(Array)
  expect(pokemonList.results.length).toBeGreaterThanOrEqual(0)
})

test('should return a pokemon list filtered by query', async () => {
  const mockPokemonList = {
    total: 2,
    results: [
      {
        id: 150,
        name: {
          english: 'Mewtwo',
          japanese: 'ミュウツー',
          chinese: '超梦',
          french: 'Mewtwo'
        },
        type: ['Psychic'],
        base: {
          HP: 106,
          Attack: 110,
          Defense: 90,
          'Sp. Attack': 154,
          'Sp. Defense': 90,
          Speed: 130
        }
      },
      {
        id: 151,
        name: {
          english: 'Mew',
          japanese: 'ミュウ',
          chinese: '梦幻',
          french: 'Mew'
        },
        type: ['Psychic'],
        base: {
          HP: 100,
          Attack: 100,
          Defense: 100,
          'Sp. Attack': 100,
          'Sp. Defense': 100,
          Speed: 100
        }
      }
    ]
  }
  server.use(
    rest.get(`${API_BASE_URL}/pokemon`, async (req, res, ctx) => {
      return res(ctx.json(mockPokemonList))
    })
  )

  const getListUseCase = GetPokemonListUseCaseFactory()
  const params = {query: 'mew'}
  const pokemonList = await getListUseCase.execute(params)

  expect(pokemonList.total).toBe(2)
  expect(pokemonList.results).toBeInstanceOf(Array)
  expect(pokemonList.results).toHaveLength(2)
})

test('should return a pokemon list filtered by types', async () => {
  const mockPokemonList = {
    total: 6,
    results: [
      {
        id: 6,
        name: {
          english: 'Charizard',
          japanese: 'リザードン',
          chinese: '喷火龙',
          french: 'Dracaufeu'
        },
        type: ['Fire', 'Flying'],
        base: {
          HP: 78,
          Attack: 84,
          Defense: 78,
          'Sp. Attack': 109,
          'Sp. Defense': 85,
          Speed: 100
        }
      },
      {
        id: 146,
        name: {
          english: 'Moltres',
          japanese: 'ファイヤー',
          chinese: '火焰鸟',
          french: 'Sulfura'
        },
        type: ['Fire', 'Flying'],
        base: {
          HP: 90,
          Attack: 100,
          Defense: 90,
          'Sp. Attack': 125,
          'Sp. Defense': 85,
          Speed: 90
        }
      },
      {
        id: 250,
        name: {
          english: 'Ho-Oh',
          japanese: 'ホウオウ',
          chinese: '凤王',
          french: 'Ho-Oh'
        },
        type: ['Fire', 'Flying'],
        base: {
          HP: 106,
          Attack: 130,
          Defense: 90,
          'Sp. Attack': 110,
          'Sp. Defense': 154,
          Speed: 90
        }
      },
      {
        id: 662,
        name: {
          english: 'Fletchinder',
          japanese: 'ヒノヤコマ',
          chinese: '火箭雀',
          french: 'Braisillon'
        },
        type: ['Fire', 'Flying'],
        base: {
          HP: 62,
          Attack: 73,
          Defense: 55,
          'Sp. Attack': 56,
          'Sp. Defense': 52,
          Speed: 84
        }
      },
      {
        id: 663,
        name: {
          english: 'Talonflame',
          japanese: 'ファイアロー',
          chinese: '烈箭鹰',
          french: 'Flambusard'
        },
        type: ['Fire', 'Flying'],
        base: {
          HP: 78,
          Attack: 81,
          Defense: 71,
          'Sp. Attack': 74,
          'Sp. Defense': 69,
          Speed: 126
        }
      },
      {
        id: 741,
        name: {
          english: 'Oricorio',
          japanese: 'オドリドリ',
          chinese: '花舞鸟',
          french: 'Plumeline'
        },
        type: ['Fire', 'Flying'],
        base: {
          HP: 75,
          Attack: 70,
          Defense: 70,
          'Sp. Attack': 98,
          'Sp. Defense': 70,
          Speed: 93
        }
      }
    ]
  }
  server.use(
    rest.get(`${API_BASE_URL}/pokemon`, async (req, res, ctx) => {
      return res(ctx.json(mockPokemonList))
    })
  )

  const getListUseCase = GetPokemonListUseCaseFactory()
  const params = {types: ['Fire', 'Flying']}
  const pokemonList = await getListUseCase.execute(params)

  expect(pokemonList.total).toBe(6)
  expect(pokemonList.results).toBeInstanceOf(Array)
  expect(pokemonList.results).toHaveLength(6)
})
