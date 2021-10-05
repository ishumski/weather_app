export const getParameterByCoords = (latitude: number, longitude: number) => {
    const currentGeolocationByCoords: string = `lattlong=${latitude},${longitude}`
    return currentGeolocationByCoords
}

export const getParameterByCityName = (city: string) => {
    const currentGeolocationByCity: string = `query=${city}`
    return currentGeolocationByCity
}

export const changeCelsiusToFahrenheit = (t: number) => {
    const changedToFahrenheit: number = parseFloat(((t * 9) / 5 + 32).toFixed(1))
    return changedToFahrenheit
}

