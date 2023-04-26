import { TCocktail } from '../../configs/types/cocktail.type'

/**
 * Random cocktails getter
 * @param numberOfItems
 */
export const fetchRandomCocktails = (numberOfItems: number) => async (url: string) => {
  const cocktails: TCocktail[] = await Promise.all(
    new Array(numberOfItems).fill(1).map(async () => {
      const data = await fetch(url)

      if (!data.ok) throw new Error('Error fetching cocktails')

      const cocktails = await data.json().then(res => res.drinks[0])

      return {
        title: cocktails.strDrink,
        category: cocktails.strCategory,
        id: cocktails.idDrink,
        image: cocktails.strDrinkThumb,
      } as TCocktail
    })
  )

  return cocktails
}
