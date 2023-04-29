import { TCocktail } from '../../configs/types/cocktail.type'
import { API_URLS } from '../../configs/constants/api-urls'

export const fetchCocktailsById = async ([, favouriteIds]: [string, string[]]) => {
  const cocktails: TCocktail[] = await Promise.all(
    favouriteIds.map(async id => {
      const data = await fetch(API_URLS.GET_COCKTAIL_BY_ID(id))

      if (!data.ok) throw new Error('Error fetching cocktails')

      return await data.json().then(
        res =>
          ({
            id: res.drinks[0].idDrink,
            title: res.drinks[0].strDrink,
            category: res.drinks[0].strCategory,
            image: res.drinks[0].strDrinkThumb,
          } as TCocktail)
      )
    })
  )
  return cocktails
}
