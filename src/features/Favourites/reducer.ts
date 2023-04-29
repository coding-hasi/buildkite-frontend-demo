import { useEffect } from 'react'
import { API_URLS } from '../../configs/constants/api-urls'
import { fetchCocktailsById } from './fetcher'
import { useLocalStorage } from 'usehooks-ts'
import { notification } from 'antd'
import useSWRImmutable from 'swr/immutable'

export function useFavouriteReducer() {
  const [favouriteIds, setFavouriteIds] = useLocalStorage<string[]>('favourites', [])
  const {
    data: favouriteCocktails,
    isLoading,
    error,
  } = useSWRImmutable([API_URLS.GET_COCKTAIL_BY_ID(), favouriteIds], fetchCocktailsById)
  const [notify, notificationContextHolder] = notification.useNotification()

  useEffect(() => {
    if (error)
      notify.info({
        message: 'Failed to fetch favourite cocktails',
        placement: 'topRight',
      })
  }, [error, notify])

  const removeFromFavourites = (id: string) => {
    setFavouriteIds(currentFavourites => currentFavourites.filter(cId => cId !== id))

    notify.success({
      message: 'Removed from favourites successfully!',
      placement: 'topRight',
    })
  }

  return { state: { favouriteCocktails, isLoading }, actions: { removeFromFavourites }, notificationContextHolder }
}
