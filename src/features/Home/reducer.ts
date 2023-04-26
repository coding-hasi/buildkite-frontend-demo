import useSWR from 'swr'
import { API_URLS } from '../../configs/constants/api-urls'
import { fetchRandomCocktails } from './fetcher'

export function useHomeReducer() {
  const {
    data: cocktails,
    error: cocktailFetchingError,
    isLoading: isCocktailFetching,
    mutate: refetchCocktails,
    isValidating: cocktailsRefetching,
  } = useSWR(API_URLS.GET_A_RANDOM_COCKTAIL, fetchRandomCocktails(5))

  return {
    state: { cocktails, cocktailFetchingError, isCocktailFetching, cocktailsRefetching },
    actions: { refetchCocktails },
  }
}
