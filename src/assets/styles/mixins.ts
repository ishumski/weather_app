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
display: ${dp};
flex: ${fl};
flex-direction: ${fd};
justify-content: ${jc};
align-items: ${ai};
flex-wrap: ${fw};
`

export const elemSize = ({ w, h, minw, maxw }: ElemSizeProps) => `
width: ${w};
height:${h};
min-width:${minw};
max-width:${maxw};
`

export const elemFonts = ({ fw, fs }: ElemFontsProps) => `
font-weight: ${fw};
font-size: ${fs};
`
