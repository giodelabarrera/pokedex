export default function RESTRepository ({ httpClient }) {
  return {
    async getSingle (idOrName) {
      const pokemon = await httpClient(`pokemon/${idOrName}`)
      return pokemon
    },
    async getList ({ query, types = [], sort = 'lowest_number', limit = 12, offset = 0 }) {
      function toQueryString (params) {
        const searchParams = new URLSearchParams()
        if (query) searchParams.append('query', params.query)
        searchParams.append('types', params.types)
        searchParams.append('sort', params.sort)
        searchParams.append('limit', params.limit)
        searchParams.append('offset', params.offset)
        return searchParams.toString()
      }

      const params = { query, types, sort, limit, offset }
      const queryString = toQueryString(params)
      const endpoint = 'pokemon' + queryString && `?${queryString}`
      const pokemonList = await httpClient(endpoint)
      return pokemonList
    }
  }
}
