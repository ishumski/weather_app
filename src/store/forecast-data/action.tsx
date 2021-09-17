import { ForecastData, SetForecastAction } from '../../types/interfaces'
import { forecastDataConstance } from './types'

export const setForecast = (data: ForecastData): SetForecastAction => ({
  type: forecastDataConstance.SET_CURRENT_LOCATION_FORECAST,
  payload: data
})
