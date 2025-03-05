import { createSlice } from "@reduxjs/toolkit";
import { Recipe } from "@/data/recipe";
import data from '@/data/recipes.json';

type ToastInfo = { 
  display: boolean; 
  message?: string; 
};

interface ListState {
  listDetails: Array<Recipe>;
  recipeDetails: Recipe;
  sortByTitle?: 'asc' | 'desc' ;
  filterByFave: Array<boolean>; 
  searchText: string;
  toastInfo: ToastInfo
}

const initialState: ListState = {
  listDetails: data.recipes as Array<Recipe>,
  recipeDetails: {} as Recipe,
  sortByTitle: undefined,
  filterByFave: [true, false],
  searchText: '',
  toastInfo: { display: false }
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState, 
  reducers: {
    addRecipe: (state, action) => {
      const newRecipe = action.payload;
      state.listDetails.push({
        ...newRecipe, 
        isFavorite: false, 
        id: state.listDetails.length ? Math.max(...state.listDetails.map((x)=> Number(x.id))) + 1 : 1,  
        dateCreated: new Date().toISOString()
      });
    },
    deleteRecipe: (state, action) => {
      const id = action.payload;
      state.listDetails = state.listDetails.filter((x) => Number(x.id) !== Number(id));
    },
    updateRecipe: (state, action) => {
      const updatedRecipe = action.payload;
      const foundIndex = state.listDetails.findIndex(x => Number(x.id) == Number(updatedRecipe.id));
      if(foundIndex >= 0) {
        state.listDetails[foundIndex] = {...state.listDetails[foundIndex], ...updatedRecipe};
      }
    },
    updateFavoriteRecipe: (state, action) => {
      const id = action.payload;
      const foundIndex = state.listDetails.findIndex(x => Number(x.id) == Number(id));
      if(foundIndex >= 0) state.listDetails[foundIndex].isFavorite = !state.listDetails[foundIndex].isFavorite;
    },
    updateSort: (state, action) => {
      state.sortByTitle = action.payload;
    },
    updateFilter: (state, action) => {
      state.filterByFave = action.payload;
    },
    updateSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    updateToastInfo: (state, action) => {
      state.toastInfo = action.payload;
    },
  },
});

export const { 
  addRecipe, 
  deleteRecipe, 
  updateRecipe, 
  updateFavoriteRecipe, 
  updateSort, 
  updateFilter, 
  updateSearchText,
  updateToastInfo
} = recipeSlice.actions;

export default recipeSlice.reducer;