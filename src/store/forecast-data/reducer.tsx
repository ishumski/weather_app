import { ForecastInitialState, SetForecast } from '../../types/interfaces'
import { forecastDataConstance } from './types'

const initialState: ForecastInitialState = {
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
  state: ForecastInitialState = initialState,
  action: SetForecast
): any => {
  switch (action.type) {
    case forecastDataConstance.SET_CURRENT_LOCATION_FORECAST:
      return {
        ...state,
        forecastData: action.payload
      }
    default:
      return state
  }
}
