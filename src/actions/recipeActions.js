import { deleteRecipes, getAllRecipes, postRecipe } from '../services/recipesApi';

export const PREPEND_RECIPE = 'PREPEND_RECIPE';
export const prependRecipe = recipe => ({
  type: PREPEND_RECIPE,
  payload: recipe
});

export const SET_RECIPES = 'SET_RECIPES';
export const setRecipes = recipes => ({
  type: SET_RECIPES,
  payload: recipes
});

export const DELETE_RECIPE = 'DELETE_RECIPE';

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

  export const removeRecipe = id => dispatch => {
    deleteRecipes(id)
      .then(recipe => {
        dispatch({
          type: DELETE_RECIPE,
          payload: recipe.id
        });
      });
  };
