import { configureStore } from '@reduxjs/toolkit'
import { favoriteReducer } from './favorite/favorite.slice'

export const store = configureStore({
	reducer: {
		favorites: favoriteReducer
	}
})

export type TRootState = ReturnType<typeof store.getState>

// Данный диспатч используется для использовния созданых функций из слайсов
export type TAppDispatch = typeof store.dispatch
