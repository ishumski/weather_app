import { setForecast } from "../store/action"
import { CurrentLocationData, ForecastData, GeopositionData } from "../types/interfaces"

export const getCurrentLocationForecast = (): any => (dispatch: any) => {

    navigator.geolocation.getCurrentPosition((position: GeopositionData) => {

        const { latitude, longitude }: { latitude: number, longitude: number } = position.coords

        const fixedLatitude: number = parseFloat(latitude.toFixed(2))
        const fixedLongitude: number = parseFloat(longitude.toFixed(2))

        const currentGeolocationUrl: string = `api/location/search/?lattlong=${fixedLatitude},${fixedLongitude}`

        return fetch(currentGeolocationUrl)
            .then((res: any) => res.json())
            .then((data: Array<CurrentLocationData>) => {

                const currentWoeid: number = data[0].woeid
                const currentLocationForecast: string = `api/location/${currentWoeid}/`

                fetch(currentLocationForecast)
                    .then((response: any) => response.json())
                    .then((data: ForecastData) => {
                        dispatch(setForecast(data))
                    })
            })
            .catch((error: string) => console.log(error))
    })
}


