import styled from 'styled-components'

const ItemContainer = styled.div`
  width: 120px;
  height: 177px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #e7e7eb;
  background: #1e213a;
`
const Title = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`
const ItemIcon = styled.img`
  width: 55px;
  height: 60px;
`

const TemperatureValue = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`

const ForecastSingleItem = ({
  max_temp,
  min_temp,
  id,
  weather_state_abbr,
  applicable_date
}: {
  max_temp: number | string
  min_temp: number | string
  id: number
  weather_state_abbr: string
  applicable_date: string
}): JSX.Element => {
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
