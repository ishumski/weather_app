import Card from '../../common/card'
import { ItemIcon, MinTempValue, TemperatureValue } from './style'

interface ForecastSingleItemProps {
  height: string
  width: string
  max_temp: number | string
  min_temp: number | string
  id?: number
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
      id={id}
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
