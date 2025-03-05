import { combineReducers } from 'redux';

import recipeReducer from './slices/recipeSlice';

const rootReducer = combineReducers({
    recipe: recipeReducer
});

export default rootReducer;