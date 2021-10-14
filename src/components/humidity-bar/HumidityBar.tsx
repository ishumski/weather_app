import {
  BarValue,
  HumidityBarContainer,
  HumidityPercentage,
  HumidityTrack,
  PercentSign
} from './style'

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
