import { setForecast } from "../store/action"

import { CurrentLocationData, ForecastData, } from "../types/interfaces"

export const getForecastByCoords = (latitude: number, longitude: number) => {
    const currentGeolocationByCoords: string = `lattlong=${latitude},${longitude}`
    return currentGeolocationByCoords
}

export const getForecastByCityName = (city: string) => {
    const currentGeolocationByCity: string = `query=${city}`
    return currentGeolocationByCity
}

export const getForecastByGeolocationUrl = (url: string) => (dispatch: any) => {
    const apiUrl: string = `api/location/search/?${url}`

    return fetch(apiUrl)
        .then((res: any) => res.json())
        .then((data: Array<CurrentLocationData>) => {

            const currentWoeid: number = data[0].woeid
            const currentLocationForecast: string = `/api/location/${currentWoeid}/`

            fetch(currentLocationForecast)
                .then((response: any) => response.json())
                .then((data: ForecastData) => {
                    dispatch(setForecast(data))
                })
        })
        .catch((error: string) => console.log(error))
}

