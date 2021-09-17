import { setForecast } from "../store/action"

export const getCurrentLocationForecast = () => (dispatch: any) => {
    const currentLocationForecastUrl: string = 'api/location/834463/'
    return fetch(currentLocationForecastUrl)
        .then((res: any) => res.json())
        .then((data: any) => dispatch(setForecast(data)))
        .catch((error: string) => console.log(error))
}
