import { TCocktail } from '../../configs/types/cocktail.type'
import isEmpty from 'lodash/isEmpty'
import { API_URLS } from '../../configs/constants/api-urls'

/**
 * Cocktails Fetcher
 * @param numberOfItems
 */
export const fetchCocktails = async ([url, searchString]: string[]) => {
  if (isEmpty(searchString)) return fetchRandomCocktails(url)
  else return fetchSearchingCocktails(searchString)
}

/**
 * Random cocktails getter
 * @param url
 */
const fetchRandomCocktails = async (url: string) => {
  const cocktails: TCocktail[] = []
  let count = 0
  while (count < 5) {
    const data = await fetch(url)

    if (!data.ok) throw new Error('Error fetching cocktails')

    const cocktail = await data.json().then(res => res.drinks[0])

    if (!cocktails.map(c => c.id).includes(cocktail.idDrink)) {
      count++
      cocktails.push({
        title: cocktail.strDrink,
        category: cocktail.strCategory,
        id: cocktail.idDrink,
        image: cocktail.strDrinkThumb,
      })
    }
  }

  return cocktails
}

/**
 * Cocktails Searcher
 * @param searchString
 */
const fetchSearchingCocktails = async (searchString: string) => {
  const cocktails: TCocktail[] = []

  const data = await fetch(API_URLS.SEARCH_A_COCKTAIL(searchString))

  if (!data.ok) throw new Error('Error fetching cocktails')

  await data.json().then(res =>
    res.drinks.map((drink: any) => {
      if (
        !isEmpty(drink.idDrink) &&
        !isEmpty(drink.strDrink) &&
        !isEmpty(drink.strCategory) &&
        !isEmpty(drink.strDrinkThumb)
      )
        cocktails.push({
          id: drink.idDrink,
          title: drink.strDrink,
          category: drink.strCategory,
          image: drink.strDrinkThumb,
        } as TCocktail)
    })
  )

  return cocktails
}
