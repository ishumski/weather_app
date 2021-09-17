import { SetForecast, ForecastData } from '../../types/interfaces'
import { forecastDataConstance } from './types'

export const setForecast = (data: ForecastData): SetForecast => ({
  type: forecastDataConstance.SET_CURRENT_LOCATION_FORECAST,
  payload: data
})
