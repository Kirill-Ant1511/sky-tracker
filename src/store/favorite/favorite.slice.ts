import { createSlice } from "@reduxjs/toolkit";

const LS_KEY = "favorite";

// Здесь мы описываем наши функции которые можно будет использовать для работы с состоянием
// Функции для работы с local storage
const getFavoriteFromLocalStorage = () => {
  const favorites = localStorage.getItem(LS_KEY);
  if (!favorites) return [];
  try {
    return JSON.parse(favorites);
  } catch (error) {
    console.log(error);
    return [];
  }
};

const saveFavoriteToLocalStorage = (favorites: string[]) => {
  localStorage.setItem(LS_KEY, JSON.stringify(favorites));
};

const initialState: string[] = getFavoriteFromLocalStorage();

const favoriteSlice = createSlice({
  name: LS_KEY,
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
        saveFavoriteToLocalStorage(state);
      }
    },
    removeFavorite: (state, action) => {
      state = state.filter((id) => id !== action.payload);
      saveFavoriteToLocalStorage(state);
      return state;
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
