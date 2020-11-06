import { postRecipe } from '../services/recipesApi';

export const PREPEND_RECIPE = 'PREPEND_RECIPE';
export const prependRecipe = recipe => ({
  type: PREPEND_RECIPE,
  payload: recipe
});

export const createRecipe = recipe => {
  dispatch => {
    postRecipe(recipe)
      .then(createdRecipe => {
        dispatch(prependRecipe(createdRecipe));
      });
  };


};
