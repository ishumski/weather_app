import { setForecast } from "../store/action"

import { CurrentLocationData, ForecastData, } from "../types/interfaces"

export const getForecast = (param: string) => (dispatch: any) => {
    const apiUrl: string = `api/location/search/?${param}`

    return fetch(apiUrl)
        .then((res: Response) => res.json())
        .then((data: Array<CurrentLocationData>) => {

            const currentWoeid: number = data[0].woeid
            const currentLocationForecast: string = `/api/location/${currentWoeid}/`

            fetch(currentLocationForecast)
                .then((response: Response) => response.json())
                .then((data: ForecastData) => {
                    dispatch(setForecast(data))
                })
        })
        .catch((error: string) => console.log(error))
}

