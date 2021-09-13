import { forecastDataConstance } from './types'

export const getCurrentLocationForecast = () => (dispatch: any) => {
  const currentLocationForecastUrl = '/api/location/44418/'
  fetch(currentLocationForecastUrl)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: forecastDataConstance.GET_CURRENT_LOCATION_FORECAST,
        payload: data
      })
    })
    .catch(error => console.log(error))
}
