export { }

/****colors****/
export const white: string = '#ffffff'
export const black: string = '000000'

interface Background {
    color_1: string
    color_2: string
    color_3: string
    color_4: string
    color_5: string
    color_6: string
    color_7: string
}

interface Primary {
    color_1: string
    color_2: string
    color_3: string
    color_4: string
}
interface BoxShadow {
    shadow_1: string
}

export const background: Background = {
    color_1: '#100e1d',
    color_2: '#1e213a',
    color_3: 'rgba(255, 255, 255, 0.3)',
    color_4: '#6e707a',
    color_5: '#e7e7eb',
    color_6: '#ffec65',
    color_7: '#585676'
}

export const primary: Primary = {
    color_1: '#e7e7eb',
    color_2: '#a09fb1',
    color_3: '#88869d',
    color_4: '#110e3c'
}

export const box: BoxShadow = {
    shadow_1: 'rgba(0, 0, 0, 0.25)'
}

/***fonts***/

interface FontWeight {
    normal: string
    bold: string
}
interface FontSize {
    size_1: string
    size_2: string
    size_3: string
    size_4: string
    size_5: string
    size_6: string
    size_7: string
    size_8: string
}

export const fontWeight: FontWeight = {
    normal: '500',
    bold: '600'
}

export const fontSize: FontSize = {
    size_1: '12px',
    size_2: '16px',
    size_3: '18px',
    size_4: '24px',
    size_5: '36px',
    size_6: '40px',
    size_7: '64px',
    size_8: '144px'
}
