import { forecastDataConstance } from './types'

const initialState = {
  forecastData: null
}

export default (state = initialState, action: any) => {
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
