import {rest} from 'msw'
import * as pokedexDB from 'test/data/pokedex'

const apiUrl = process.env.REACT_APP_API_BASE_URL

const handlers = [
  rest.get(`${apiUrl}/pokemon`, async (req, res, ctx) => {
    // TODO: validation
    const {query, types, sort} = req
    const params = {query, types, sort}
    const pokemonList = await pokedexDB.search(params)
    return res(ctx.json(pokemonList))
  }),

  rest.get(`${apiUrl}/pokemon/:idOrName`, async (req, res, ctx) => {
    const {idOrName} = req.params
    // TODO: validation
    const pokemon = await pokedexDB.read(idOrName)
    return res(ctx.json(pokemon))
  })
]

export {handlers}
