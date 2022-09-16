import {rest} from 'msw'
import * as yup from 'yup'
import * as pokedexDB from '../data/pokedex'

const apiUrl = import.meta.env.VITE_API_BASE_URL

const handlers = [
  rest.get(`${apiUrl}/pokemon`, async (req, res, ctx) => {
    const query = req.url.searchParams.get('query')
    const sort = req.url.searchParams.get('sort')
    const limit = req.url.searchParams.get('limit')
    const offset = req.url.searchParams.get('offset')
    const types = req.url.searchParams.has('types')
      ? req.url.searchParams.get('types')
      : undefined

    // validate
    const schema = yup.object().shape({
      query: yup.string(),
      sort: yup.string(yup.mixed().oneOf(Object.values(pokedexDB.SORT_TYPES))),
      limit: yup.number().positive(),
      offset: yup.number().min(0),
      types: yup.array()
    })
    try {
      await schema.validate(
        {
          query,
          sort,
          limit,
          offset,
          types
        },
        {abortEarly: false}
      )
    } catch (error) {
      const {errors, message} = error
      return res(ctx.status(400), ctx.json({errors, message}))
    }

    const params = {query, types, sort}
    if (typeof limit !== 'undefined') params.limit = Number(limit)
    if (typeof offset !== 'undefined') params.offset = Number(offset)
    try {
      const pokemonList = await pokedexDB.search(params)
      return res(ctx.json(pokemonList))
    } catch (error) {
      const {message} = error
      return res(ctx.status(500), ctx.json({message}))
    }
  }),

  rest.get(`${apiUrl}/pokemon/:idOrName`, async (req, res, ctx) => {
    const {idOrName} = req.params

    // validate
    const schema = yup.object().shape({
      idOrName: yup.string().required()
    })
    try {
      await schema.validate({idOrName}, {abortEarly: false})
    } catch (error) {
      const {errors, message} = error
      return res(ctx.status(400), ctx.json({errors, message}))
    }

    try {
      const pokemon = await pokedexDB.read(idOrName)
      if (!pokemon) res.status(404).json(null)
      return res(ctx.json(pokemon))
    } catch (error) {
      const {message} = error
      return res(ctx.status(500), ctx.json({message}))
    }
  })
]

export {handlers}
