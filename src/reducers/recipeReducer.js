import { PREPEND_RECIPE } from '../actions/recipeActions';

const initialState = {
  list: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PREPEND_RECIPE:
      return { ...state, list: [action.payload, ...state.list] };
    default:
      return state;
  }
}
