import { useEffect, useState } from 'react'
import useSWRImmutable from 'swr/immutable'
import { API_URLS } from '../../configs/constants/api-urls'
import { fetchCocktails } from './fetcher'
import { notification } from 'antd'
import { useLocalStorage } from 'usehooks-ts'

export function useHomeReducer() {
  const [searchString, setSearchString] = useState<string>()
  const [notify, notificationContextHolder] = notification.useNotification()
  const [, setFavouriteIds] = useLocalStorage<string[]>('favourites', [])

  const {
    data: cocktails,
    error: cocktailFetchingError,
    isLoading: isCocktailFetching,
    mutate: refetchCocktails,
    isValidating: cocktailsRefetching,
  } = useSWRImmutable([API_URLS.GET_A_RANDOM_COCKTAIL, searchString], fetchCocktails)

  useEffect(() => {
    if (cocktailFetchingError)
      notify.info({
        message: 'Failed to fetch cocktails',
        placement: 'topRight',
      })
  }, [cocktailFetchingError, notify])

  const addToFavourites = (id: string) => {
    setFavouriteIds(currentFavourites => [...currentFavourites, id])

    notify.success({
      message: 'Added to favourites successfully!',
      placement: 'topRight',
    })
  }

  return {
    state: { cocktails, cocktailFetchingError, isCocktailFetching, cocktailsRefetching },
    actions: { refetchCocktails, setSearchString, addToFavourites },
    notificationContextHolder,
  }
}
