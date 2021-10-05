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

export const setWindDirection = (direction: string): string => {
    switch (direction) {
        case 'N':
            return '0deg'
        case 'NE':
            return '45deg'
        case 'NNE':
            return '45deg'
        case 'E':
            return '90deg'
        case 'SE':
            return '135deg'
        case 'SSE':
            return '135deg'
        case 'ESE':
            return '135deg'
        case 'S':
            return '180deg'
        case 'SW':
            return '225deg'
        case 'SSW':
            return '225deg'
        case 'W':
            return '270deg'
        case 'NW':
            return '315deg'
        case 'WNW':
            return '315deg'
        case 'NNW':
            return '315deg'
        default:
            return '0deg'
    }
}
