import styled from 'styled-components'
import Card from '../../common/card'
import { colors } from '../../assets/styles/colors'
import { elemPlacement, elemSize } from '../../assets/styles/mixins'

const ItemIcon = styled.img`
  ${elemSize({ w: '55px', h: '60px' })}
`

const TemperatureValue = styled.div`
  ${elemPlacement({ dp: 'flex' })};
`

const MinTempValue = styled.p`
  color: ${colors.secondaryLightgrey};
  margin-left: 15px;
`

interface ForecastSingleItemProps {
  height: string
  width: string
  max_temp: number | string
  min_temp: number | string
  id: number
  weather_state_abbr: string
  applicable_date: string | number
}

const ForecastSingleItem = ({
  height,
  width,
  id,
  applicable_date,
  weather_state_abbr,
  max_temp,
  min_temp
}: ForecastSingleItemProps): JSX.Element => {
  return (
    <Card
      height={height}
      width={width}
      content={<ItemIcon src={weather_state_abbr} alt="forecast-icon" />}
      title={applicable_date.toLocaleString()}
      cardInfo={
        <TemperatureValue>
          <p>{max_temp}</p>
          <MinTempValue>{min_temp}</MinTempValue>
        </TemperatureValue>
      }
    />
  )
}

export default ForecastSingleItem
