import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {types as characterTypes} from 'store/character'
import {types as charactersTypes} from 'store/characters'

function useInfiniteSearchPokemonQuery({query, limit, sort, offset}) {
  const dispatch = useDispatch()

  const charactersState = useSelector(state => state.characters)
  const {data, loading, error, loadingMore} = charactersState

  useEffect(() => {
    dispatch({
      type: charactersTypes.FETCH_CHARACTERS_REQUEST,
      payload: {query, limit, sort}
    })
  }, [dispatch, limit, query, sort])

  useEffect(() => {
    if (offset === 0) return
    dispatch({
      type: charactersTypes.FETCH_CHARACTERS_LOAD_MORE_REQUEST,
      payload: {query, limit, sort, offset}
    })
  }, [dispatch, limit, offset, query, sort])

  const canLoadMore = data ? data.total > data.results.length : false

  return {
    canLoadMore,
    data,
    error: error,
    isLoading: loading,
    isLoadingMore: loadingMore
  }
}

function usePokemonQuery(idOrSlug) {
  const charactersState = useSelector(state => state.character)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: characterTypes.FETCH_CHARACTER_REQUEST, payload: idOrSlug})
  }, [dispatch, idOrSlug])

  return {...charactersState}
}

export {usePokemonQuery, useInfiniteSearchPokemonQuery}
