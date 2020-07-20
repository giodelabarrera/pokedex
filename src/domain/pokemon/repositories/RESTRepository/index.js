export default function RESTRepository({httpClient}) {
  return {
    async getSingle(idOrName) {
      const pokemon = await httpClient(`pokemon/${idOrName}`)
      return pokemon
    },
    async getList({
      query = '',
      types = [],
      sort = 'lowest_number',
      limit = 12,
      offset = 0,
    } = {}) {
      function toQueryString({query, types, sort, limit, offset}) {
        const searchParams = new URLSearchParams()
        if (query) searchParams.append('query', query)
        if (types.length)
          types.forEach(type => searchParams.append('types[]', type))
        searchParams.append('sort', sort)
        searchParams.append('limit', limit)
        searchParams.append('offset', offset)
        return searchParams.toString()
      }

      const params = {query, types, sort, limit, offset}
      const queryString = toQueryString(params)
      const endpoint = 'pokemon' + (queryString && `?${queryString}`)
      const pokemonList = await httpClient(endpoint)
      return pokemonList
    },
  }
}
