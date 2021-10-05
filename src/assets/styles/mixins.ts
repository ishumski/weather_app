interface ElemPlacementProps {
    dp?: string
    fl?: string
    fd?: string
    jc?: string
    ai?: string
    fw?: string
}

interface ElemSizeProps {
    w?: string
    h?: string
    minw?: string
    maxw?: string
}

interface ElemFontsProps {
    fw?: string
    fs?: string
}

export const elemPlacement = ({
    dp,
    fl,
    fd,
    jc,
    ai,
    fw
}: ElemPlacementProps) => `
display: ${dp || 'flex'};
flex: ${fl || '0 1 auto'};
flex-direction: ${fd || 'row'};
justify-content: ${jc || 'start'};
align-items: ${ai || 'normal'};
flex-wrap: ${fw || 'nowrap'};
`

export const elemSize = ({ w, h, minw, maxw }: ElemSizeProps) => `
width: ${w || 'auto'};
height:${h || 'auto'};
min-width:${minw || 'auto'};
max-width:${maxw || 'auto'};
`

export const elemFonts = ({ fw, fs }: ElemFontsProps) => `
font-weight: ${fw || 'normal'};
font-size: ${fs || '16px'};
`
