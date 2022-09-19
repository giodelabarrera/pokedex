import {useState, useEffect} from 'react'

import {useDomain} from 'context/domain'

export default function usePokemonList({query, limit, sort}) {
  const domain = useDomain()

  const [offset, setOffset] = useState(0)
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    domain
      .get('pokemon__get_pokemon_list_use_case')
      .execute({query, limit, sort})
      .then(data => {
        setData(data)
        setOffset(0)
        setIsLoading(false)
      })
      .catch(error => setError(error))
  }, [domain, limit, query, sort])

  useEffect(() => {
    if (offset === 0) return
    setIsLoadingMore(true)
    domain
      .get('pokemon__get_pokemon_list_use_case')
      .execute({query, offset, limit, sort})
      .then(data => {
        setData(prevData => ({
          ...data,
          results: prevData.results.concat(data.results)
        }))
        setIsLoadingMore(false)
      })
  }, [domain, limit, offset, query, sort])

  const canLoadMore = data ? data.total > data.results.length : false

  return {
    canLoadMore,
    data,
    error,
    isLoading,
    isLoadingMore,
    setOffset
  }
}
