import { IGetForecast, IForecastData } from '../../types/interfaces'
import { forecastDataConstance } from './types'

export const getForecast = (data: IForecastData): IGetForecast => ({
  type: forecastDataConstance.GET_CURRENT_LOCATION_FORECAST,
  payload: data
})
