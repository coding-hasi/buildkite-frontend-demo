export const API_URLS = {
  GET_A_RANDOM_COCKTAIL: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
  SEARCH_A_COCKTAIL: (searchString: string) =>
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchString}`,
  GET_COCKTAIL_BY_ID: (id?: string) => `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
}
