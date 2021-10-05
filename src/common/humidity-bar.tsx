import styled from 'styled-components'
import { fontSize, fontWeight } from '../assets/styles/fonts'
import { colors } from '../assets/styles/colors'
import { elemFonts, elemPlacement, elemSize } from '../assets/styles/mixins'

const HumidityBarContainer = styled.div`
  ${elemPlacement({ dp: 'flex', fd: 'column' })}
  ${elemSize({ w: '100%', maxw: '229px' })}
`

const BarValue = styled.div`
  ${elemPlacement({ dp: 'flex', jc: 'space-between' })}
  ${elemFonts({ fw: `${fontWeight.bold}`, fs: `${fontSize.size_1}` })}
  margin-bottom: 2px;
  color: ${colors.secondaryLightgrey};
`

const HumidityTrack = styled.div`
  ${elemSize({ w: '229px', h: '8px' })}
  margin-bottom: 4px;
  border-radius: 80px;
  background: ${colors.primaryLightgrey};
`

const HumidityPercentage: any = styled.div`
  ${elemSize({ h: '8px' })}
  width: ${({ width }: HumidityBarProps) => width}%;
  border-radius: 80px;
  background: ${colors.yellow};
`

const PercentSign = styled.div`
  align-self: end;
`
interface HumidityBarProps {
  width: number | string
}

const HumidityBar = ({ width }: HumidityBarProps): JSX.Element => {
  return (
    <HumidityBarContainer>
      <BarValue>
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </BarValue>
      <HumidityTrack>
        <HumidityPercentage width={width} />
      </HumidityTrack>
      <PercentSign>%</PercentSign>
    </HumidityBarContainer>
  )
}

export default HumidityBar
