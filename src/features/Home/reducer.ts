import { useEffect, useState } from 'react'
import useSWRImmutable from 'swr/immutable'
import { API_URLS } from '../../configs/constants/api-urls'
import { fetchCocktails } from './fetcher'
import { notification } from 'antd'

export function useHomeReducer() {
  const [searchString, setSearchString] = useState<string>()
  const [api, contextHolder] = notification.useNotification()

  const {
    data: cocktails,
    error: cocktailFetchingError,
    isLoading: isCocktailFetching,
    mutate: refetchCocktails,
    isValidating: cocktailsRefetching,
  } = useSWRImmutable([API_URLS.GET_A_RANDOM_COCKTAIL, searchString], fetchCocktails)

  useEffect(() => {
    if (cocktailFetchingError)
      api.info({
        message: 'Failed to fetch cocktails',
        placement: 'topRight',
      })
  }, [cocktailFetchingError, api])

  return {
    state: { cocktails, cocktailFetchingError, isCocktailFetching, cocktailsRefetching },
    actions: { refetchCocktails, setSearchString },
    notificationContextHolder: contextHolder,
  }
}
