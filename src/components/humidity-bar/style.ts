import styled from 'styled-components'
import { fontSize, fontWeight } from '../../assets/styles/fonts'
import { colors } from '../../assets/styles/colors'
import { elemFonts, elemPlacement, elemSize } from '../../assets/styles/mixins'

export const HumidityBarContainer = styled.div`
  ${elemPlacement({ dp: 'flex', fd: 'column' })}
  ${elemSize({ w: '100%', maxw: '229px' })}
`

export const BarValue = styled.div`
  ${elemPlacement({ dp: 'flex', jc: 'space-between' })}
  ${elemFonts({ fw: `${fontWeight.bold}`, fs: `${fontSize.small}` })}
  margin-bottom: 2px;
  color: ${colors.secondaryLightgrey};
`

export const HumidityTrack = styled.div`
  ${elemSize({ w: '229px', h: '8px' })}
  margin-bottom: 4px;
  border-radius: 80px;
  background: ${colors.primaryLightgrey};
`

export const HumidityPercentage: any = styled.div`
  ${elemSize({ h: '8px' })}
  width: ${((props: any) => props.width)}%;
  border-radius: 80px;
  background: ${colors.yellow};
`

export const PercentSign = styled.div`
  align-self: end;
`
