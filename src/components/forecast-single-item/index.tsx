import styled from 'styled-components'
import {
  background,
  fontSize,
  fontWeight,
  primary
} from '../../assets/styles/styles'

const ItemContainer = styled.div`
  width: 120px;
  height: 177px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${primary.color_1};
  background: ${background.color_2};
`

const Title = styled.p`
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.size_2};
`

const ItemIcon = styled.img`
  width: 55px;
  height: 60px;
`

const TemperatureValue = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

interface ForecastSingleItemProps {
  max_temp: number | string
  min_temp: number | string
  id: number
  weather_state_abbr: string
  applicable_date: string
}

const ForecastSingleItem = ({
  max_temp,
  min_temp,
  id,
  weather_state_abbr,
  applicable_date
}: ForecastSingleItemProps): JSX.Element => {
  return (
    <ItemContainer>
      <Title> {applicable_date.toLocaleString()}</Title>
      <ItemIcon src={weather_state_abbr} alt="forecast-icon" />
      <TemperatureValue>
        <p>{max_temp}</p>
        <p>{min_temp}</p>
      </TemperatureValue>
    </ItemContainer>
  )
}

export default ForecastSingleItem
