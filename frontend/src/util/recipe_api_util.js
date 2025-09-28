import axios from 'axios';
import key from './key';
// axios.defaults.timeout = 10000;

export const getRandomRecipe = (number = 1, tags) => {
  if (!tags) tags = [];
  let tagStr = tags.join(",");
  return axios.get(`https://api.spoonacular.com/recipes/random?number=${number}&tags=${tagStr}&apiKey=${key.apiKey_spoon}`);

  // return axios({
  //   "method": "GET",
  //   "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random",
  //   "headers": {
  //     "content-type": "application/octet-stream",
  //     "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  //     "x-rapidapi-key": key.apiKey
  //   }, 
  //   "params": {
  //     "number": `${number}`,
  //     "tags": tagStr
  //   },
  // })
    // .then(res => console.log(res))
    // .fail(err => console.log(err))
  //res.data
};

export const getRandomRecipes = (number) => {
  return axios.get(`https://api.spoonacular.com/recipes/random?number=${number}&apiKey=${key.apiKey_spoon}`);
  // return axios({
  //   "method": "GET",
  //   "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random",
  //   "headers": {
  //     "content-type": "application/octet-stream",
  //     "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  //     "x-rapidapi-key": key.apiKey
  //   }, 
  //   "params": {
  //     "number": `${number}`,
  //     "tags": "vegetarian%2Cdessert"
  //   }
  // })
};

export const getRecipeById = (id, includeNutrition = true) => {
  return axios.get(`https://api.spoonacular.com/recipes/random?id=${id}&includeNutrition=${includeNutrition}&apiKey=${key.apiKey_spoon}`);

  // return axios({
  //   "method": "GET",
  //   "url": `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
  //   "headers": {
  //     "content-type": "application/octet-stream",
  //     "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  //     "x-rapidapi-key": key.apiKey
  //   }, 
  //   "params": {
  //     "includeNutrition": `${includeNutrition}`
  //   }
  // })
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
  //res.data
};

// Input ids as an array
export const getMultipleRecipes = (ids, includeNutrition = true) => {
  const idString = ids.join(',');
  return axios.get(`https://api.spoonacular.com/recipes/informationBulk?ids=${idString}&includeNutrition=${includeNutrition}&apiKey=${key.apiKey_spoon}`);

  // return axios({
  //   "method": "GET",
  //   "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk",
  //   "headers": {
  //     "content-type": "application/octet-stream",
  //     "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  //     "x-rapidapi-key": key.apiKey
  //   }, 
  //   "params": {
  //     "ids": idString,
  //     "includeNutrition": `${includeNutrition}`
  //   }
  // })
};

// Ingredients as array. Ranking 1 means maximize used ingredients and ranking 2 means minimize missed ingredients
export const getRecipesByIngredients = (ingredients, limit = 12, ranking = 1, ignorePantry = true) => {
  const query = ingredients.join(',');
  return axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&ranking=${ranking}&ignorePantry=${ignorePantry}&number=${limit}&apiKey=${key.apiKey_spoon}`);
  //   // .then((response) => {
  //   //   debugger
  //   //   console.log(response)
  //   // })
  //   // .catch((error) => {
  //   //   console.log(error)
  //   // })

  // return axios({
  //   "method": "GET",
  //   "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
  //   "headers": {
  //     "content-type": "application/octet-stream",
  //     "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  //     "x-rapidapi-key": key.apiKey
  //   }, 
  //   "params": {
  //     "number": `${limit}`,
  //     "ranking": `${ranking}`,
  //     "ignorePantry": `${ignorePantry}`,
  //     "ingredients": `${query}`
  //   }
  // })

};


// Search for recipe by name.  Returns title and id of recipe. Will return anything that starts with query string.
export const searchRecipeByName = (name, limit = 5) => {
  return axios.get(`https://api.spoonacular.com/recipes/autocomplete?query=${name}&number=${limit}&apiKey=${key.apiKey_spoon}`);

  // return axios({
  //   "method": "GET",
  //   "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/autocomplete",
  //   "headers": {
  //     "content-type": "application/octet-stream",
  //     "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  //     "x-rapidapi-key": key.apiKey
  //   }, 
  //   "params": {
  //     "number": `${limit}`,
  //     "query": name
  //   }
  // })
    // .then((response) => {
    //   console.log(response)
    // })
    // .catch((error) => {
    //   console.log(error)
    // })
};


// cuisine: array => [italian, korean, american, chinese, etc.] as lowercase
// diet: array => ["vegetarian", "ketogenic", "gluten free"]
// includeIngredients: array => [tomato, cheese, noodles]
// sort: string => calories, cholesterol, carbohydscorerates
// sortDirection: asc/desc 
// maxCalories/minCalories: int 
// maxFat/maxCarbs: int
// ignorePantry: true/false
// fillIngredients: true/false

// TAKES IN AN OPTIONS HASH
export const complexRecipeSearch = (
  {search, cuisine, diet, intolerances, sort, sortDirection, 
  minCalories, maxCalories, maxFat, maxCarbs, minProtein, 
  ignorePantry, limit}) => {

  if (!search) search = "";
  if (!cuisine) cuisine = "";
  if (!diet) diet = [];
  if (!intolerances) intolerances = "";
  if (!sort) sort = "meta-score";
  if (!sortDirection) sortDirection = "desc";

  if (!minCalories) minCalories = 0;
  if (!maxCalories || maxCalories === 0) maxCalories = 9999;
  if (!maxFat || maxFat === 0) maxFat = 9999;
  if (!maxCarbs || maxCarbs === 0) maxCarbs = 9999;
  if (!minProtein) minProtein = 0;

  if (!ignorePantry) ignorePantry = true;
  if (!limit) limit = 12;

  // const cuisineStr = cuisine.join(",");
  const dietStr = diet.join(",");
  // const config = {
  //   timeout: 10000
  // }
  // const abort = axios.CancelToken.source()
  // const id = setTimeout(
  //   () => abort.cancel(`Timeout of ${config.timeout}ms.`),
  //   10000)

  return axios.get([
    `https://api.spoonacular.com/recipes/complexSearch?`,
    `query=${search}&`,
    `cuisine=${cuisine}&`,
    `diet=${dietStr}&`,
    `intolerances=${intolerances}&`,
    `sort=${sort}&`,
    `sortDirection=${sortDirection}&`,
    `minCalories=${minCalories}&`,
    `maxCalories=${maxCalories}&`,
    `maxFat=${maxFat}&`,
    `maxCarbs=${maxCarbs}&`,
    `minProtein=${minProtein}&`,
    `maxFiber=${100}&`,
    `ignorePantry=${ignorePantry}&`,
    `number=${limit}&`,
    `addRecipeInformation=true&`,
    `fillIngredients=true&`,
    `instructionsRequired=true&`,
    `apiKey=${key.apiKey_spoon}`
  ].join(""));

  // CHANGE2025: Commented out unreachable code.
  // return axios({
  //   "method": "GET",
  //   "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
  //   "headers": {
  //     "content-type": "application/octet-stream",
  //     "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  //     "x-rapidapi-key": key.apiKey
  //   }, 
  //   "params": {
  //     "query": search,
  //     "cuisine": `${cuisine}`,
  //     "diet": `${dietStr}`,
  //     "intolerances": `${intolerances}`,
  //     "sort": `${sort}`,
  //     "sortDirection": `${sortDirection}`,
  //     "minCalories": `${minCalories}`,
  //     "maxCalories": `${maxCalories}`,
  //     "maxFat": `${maxFat}`,
  //     "maxCarbs": `${maxCarbs}`,
  //     "minProtein": `${minProtein}`,
  //     "maxFiber": "100",
  //     "ignorePantry": `${ignorePantry}`,
  //     "number": `${limit}`,
  //     "addRecipeInformation": "true",
  //     "fillIngredients": "true",
  //     "instructionsRequired": "true"
  //   },
  //   // timeout: 5000
  // })
  // .catch((error)=>{
  //   console.log("we error now")
  // })
};



export const getSimilarRecipes = (id, limit = 5) => {
  return axios.get(`https://api.spoonacular.com/recipes/${id}/similar?number=${limit}&apiKey=${key.apiKey_spoon}`);
  // axios({
  //   "method": "GET",
  //   "url": `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/similar`,
  //   "headers": {
  //     "content-type": "application/octet-stream",
  //     "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  //     "x-rapidapi-key": key.apiKey
  //   },
  //   "params": {
  //     "number": `${limit}`
  //   },
  // })
    // .then((response) => {
    //   console.log(response)
    // })
    // .catch((error) => {
    //   console.log(error)
    // })
};



// Extract recipe from site url and return as object
export const extractRecipe = (url) => {
  return axios.get(`https://api.spoonacular.com/recipes/extract?url=${url}&apiKey=${key.apiKey_spoon}`);
  // return axios({
  //   "method": "GET",
  //   "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/extract",
  //   "headers": {
  //     "content-type": "application/octet-stream",
  //     "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  //     "x-rapidapi-key": key.apiKey
  //   }, "params": {
  //     "url": url
  //   }
  // })
    // .then((response) => {
    //   console.log(response)
    // })
    // .catch((error) => {
    //   console.log(error)
    // })
};

export const getRecipe = (recipeId) => (
  axios.get(`/api/recipes/${recipeId}`)
);

export const postRecipeId = (recipeData) => {
  return axios.post('/api/recipes/indiv', recipeData);
};

export const updateRecipeIngredients = (recipeId, ingredients) => {
  return axios.patch(`api/recipes/${recipeId}/ingredients`, ingredients);
};

export const postRecipeComplex = (recipeData) => {
  return axios.post('/api/recipes/item', recipeData);
};

export const patchRecipeImage = (recipeId, recipeData) => {
  return axios.patch(`/api/recipes/${recipeId}/picture`, recipeData);
};