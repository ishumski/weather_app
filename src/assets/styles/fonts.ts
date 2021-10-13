interface FontWeight {
    normal: string
    bold: string
    bolder: string
}
interface FontSize {
    small: string
    primaryRegular: string
    secondaryRegular: string
    primaryIncreased: string
    secondaryIncreased: string
    large: string
    huge: string
    giant: string
}

export const fontWeight: FontWeight = {
    normal: '500',
    bold: '600',
    bolder: '700'
}

export const fontSize: FontSize = {
    small: '12px',
    primaryRegular: '16px',
    secondaryRegular: '18px',
    primaryIncreased: '24px',
    secondaryIncreased: '36px',
    large: '48px',
    huge: '64px',
    giant: '144px'
}
