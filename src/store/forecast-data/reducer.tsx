import { ForecastInitialState, SetForecastAction } from '../../types/interfaces'
import { forecastDataConstance } from './types'

const initialState: ForecastInitialState = {
  forecastData: {
    title: '',
    consolidated_weather: [
      {
        air_pressure: 0,
        applicable_date: '2021-09-22',
        created: '2021-09-22T11:43:40.053870Z',
        humidity: 0,
        id: 0,
        max_temp: 0,
        min_temp: 0,
        predictability: 0,
        the_temp: 0,
        visibility: 0,
        weather_state_abbr: 'hr',
        weather_state_name: '',
        wind_direction: 0,
        wind_direction_compass: '',
        wind_speed: 0
      }
    ]
  }
}

export default (
  state: ForecastInitialState = initialState,
  action: SetForecastAction
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
