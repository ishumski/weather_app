import styled from 'styled-components'
import {
  background,
  fontSize,
  fontWeight,
  primary
} from '../assets/styles/styles'

const HumidityBarContainer = styled.div`
  max-width: 229px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const BarValue = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.size_1};
  color: ${primary.color_2};
`

const HumidityTrack = styled.div`
  width: 229px;
  height: 8px;
  margin-bottom: 4px;
  border-radius: 80px;
  background: ${background.color_5};
`

const HumidityPercentage: any = styled.div`
  width: ${({ width }: HumidityBarProps) => width}%;
  height: 8px;
  border-radius: 80px;
  background: ${background.color_6};
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
