export const getCurrentLocationForecast = (): any => {
    const currentLocationForecastUrl: string = 'api/location/44418/'
    return fetch(currentLocationForecastUrl)
        .then((res: any) => res.json())
        .catch((error: string) => console.log(error))
}