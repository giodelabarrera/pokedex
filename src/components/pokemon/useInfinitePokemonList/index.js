import {useState, useEffect} from 'react'

import {useListPokemonQuery} from 'services/pokemon'

export default function useInfinitePokemonList({query, limit, sort, offset}) {
  const [historicalData, setHistoricalData] = useState()

  const firstListPokemonState = useListPokemonQuery(
    {query, limit, sort},
    {skip: offset !== 0}
  )

  const restListPokemonState = useListPokemonQuery(
    {query, limit, sort, offset},
    {skip: offset === 0}
  )

  useEffect(() => {
    if (firstListPokemonState.data) {
      setHistoricalData(firstListPokemonState.data)
    }
  }, [firstListPokemonState.data])

  useEffect(() => {
    if (restListPokemonState.data) {
      setHistoricalData(prevData => ({
        ...restListPokemonState.data,
        results: prevData.results.concat(restListPokemonState.data.results)
      }))
    }
  }, [restListPokemonState.data])

  const canLoadMore = historicalData
    ? historicalData.total > historicalData.results.length
    : false

  return {
    canLoadMore,
    data: historicalData,
    error: firstListPokemonState.error || restListPokemonState.error,
    isLoading: firstListPokemonState.isLoading,
    isFetching: firstListPokemonState.isFetching,
    isLoadingMore: restListPokemonState.isLoading,
    isFetchingMore: restListPokemonState.isFetching
  }
}
