export const getParameterByCoords = (latitude: number, longitude: number) => {
    const currentGeolocationByCoords: string = `lattlong=${latitude},${longitude}`
    return currentGeolocationByCoords
}

export const getParameterByCityName = (city: string) => {
    const currentGeolocationByCity: string = `query=${city}`
    return currentGeolocationByCity
}

export const changeCelsiusToFahrenheit = (temperature: number) => {
    const changedToFahrenheit: number = parseFloat(((temperature * 9) / 5 + 32).toFixed(1))
    return changedToFahrenheit
}
