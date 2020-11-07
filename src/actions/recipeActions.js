import { getAllRecipes, postRecipe } from '../services/recipesApi';

export const PREPEND_RECIPE = 'PREPEND_RECIPE';
export const prependRecipe = recipe => ({
  type: PREPEND_RECIPE,
  payload: recipe
});

export const SET_RECIPES = 'SET_RECIPE';
export const setRecipes = recipes => ({
  type: SET_RECIPES,
  payload: recipes
});

export const createRecipe = recipe => {
  dispatch => {
    postRecipe(recipe)
      .then(createdRecipe => {
        dispatch(prependRecipe(createdRecipe));
      });
  };

  export const fetchRecipes = () => dispatch => {
    getAllRecipes()
      .then(recipes => {
        dispatch(setRecipes(recipes))
      })
  };


};
