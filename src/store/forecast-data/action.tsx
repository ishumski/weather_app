import { ForecastData, SetForecastAction } from '../../types/interfaces'
import { forecastDataActions } from './types'

export const setForecast = (data: ForecastData): SetForecastAction => ({
  type: forecastDataActions.SET_CURRENT_LOCATION_FORECAST,
  payload: data
})
