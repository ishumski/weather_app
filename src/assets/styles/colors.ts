export const white: string = '#ffffff'
export const black: string = '#000000'

interface Colors {
    whiteOpacity: string
    primaryLightgrey: string
    secondaryLightgrey: string
    grey: string
    blue: string
    primaryBlueGrey: string
    secondaryBlueGrey: string
    tertiaryBlueGrey: string
    primaryDarkBlue: string
    secondaryDarkBlue: string
    tertiaryDarkBlue: string
    yellow: string
    transparent: string
}

interface BoxShadow {
    shadow: string
}

export const colors: Colors = {
    whiteOpacity: 'rgba(255, 255, 255, 0.3)',
    primaryLightgrey: '#e7e7eb',
    secondaryLightgrey: '#a09fb1',
    grey: '#6e707a',
    blue: '#3c47e9',
    primaryBlueGrey: '#88869d',
    secondaryBlueGrey: '#585676',
    tertiaryBlueGrey: '#616475',
    primaryDarkBlue: '#100e1d',
    secondaryDarkBlue: '#1e213a',
    tertiaryDarkBlue: '#110e3c',
    yellow: '#ffec65',
    transparent: 'transparent'
}

export const box: BoxShadow = {
    shadow: 'rgba(0, 0, 0, 0.25)'
}
