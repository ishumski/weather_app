import { combineReducers } from 'redux'
import forecastData from './forecast-data/reducer'

export const rootReducer: any = combineReducers({
  forecastData: forecastData
})

export type RootState = ReturnType<typeof rootReducer>
