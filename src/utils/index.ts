export const getParameterByCoords = (latitude: number, longitude: number) => {
    const currentGeolocationByCoords: string = `lattlong=${latitude},${longitude}`
    return currentGeolocationByCoords
}

export const getParameterByCityName  = (city: string) => {
    const currentGeolocationByCity: string = `query=${city}`
    return currentGeolocationByCity
}