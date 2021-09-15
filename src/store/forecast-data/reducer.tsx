import { IForecastInitialState, IGetForecast } from '../../types/interfaces'
import { forecastDataConstance } from './types'

const initialState: IForecastInitialState = {
  forecastData: {
    title: '',
    consolidated_weather: [
      {
        weather_state_name: '',
        applicable_date: '',
        the_temp: 0
      }
    ]
  }
}

export default (
  state: IForecastInitialState = initialState,
  action: IGetForecast
): any => {
  switch (action.type) {
    case forecastDataConstance.GET_CURRENT_LOCATION_FORECAST:
      return {
        ...state,
        forecastData: action.payload
      }
    default:
      return state
  }
}
