import { TCocktail } from '../../configs/types/cocktail.type'

/**
 * Random cocktails getter
 * @param numberOfItems
 */
export const fetchRandomCocktails = (numberOfItems: number) => async (url: string) => {
  const cocktails: TCocktail[] = await Promise.all(
    new Array(numberOfItems).fill(1).map(async () => {
      const data = await fetch(url)
        .then(res => res.json())
        .then(res => res.drinks[0])
      return {
        title: data.strDrink,
        category: data.strCategory,
        id: data.idDrink,
        image: data.strDrinkThumb,
      } as TCocktail
    })
  )

  return cocktails
}
