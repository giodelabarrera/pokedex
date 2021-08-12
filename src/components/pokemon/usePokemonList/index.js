import {useState, useEffect} from 'react'

import {useListPokemonQuery} from 'services/pokemon'

export default function usePokemonList({query, limit, sort, offset}) {
  const [historicalData, setHistoricalData] = useState()

  const {data, isLoading, error} = useListPokemonQuery({
    query,
    limit,
    sort,
    offset
  })

  useEffect(() => {
    setHistoricalData(prevData => {
      if (!prevData) return data
      return {
        ...data,
        results: prevData.results.concat(data.results)
      }
    })
  }, [data])

  const canLoadMore = historicalData
    ? historicalData.total > historicalData.results.length
    : false

  return {
    canLoadMore,
    data: historicalData,
    error,
    isLoading
  }
}
