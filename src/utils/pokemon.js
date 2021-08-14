import {useEffect, useState} from 'react'

import pokemonApi from 'store/services/pokemonApi'

const {usePokemonQuery, useSearchPokemonQuery} = pokemonApi

function useInfiniteSearchPokemonQuery({query, limit, sort, offset}) {
  const [historicalData, setHistoricalData] = useState()

  const firstListPokemonState = useSearchPokemonQuery(
    {query, limit, sort},
    {skip: offset !== 0}
  )

  const restListPokemonState = useSearchPokemonQuery(
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

export {usePokemonQuery, useSearchPokemonQuery, useInfiniteSearchPokemonQuery}
