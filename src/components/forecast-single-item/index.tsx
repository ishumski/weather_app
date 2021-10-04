import styled from 'styled-components'
import { fontSize, fontWeight } from '../../assets/styles/fonts'
import { colors } from '../../assets/styles/colors'
import { elemFonts, elemPlacement, elemSize } from '../../assets/styles/mixins'

const ItemContainer = styled.div`
  ${elemPlacement({ dp: 'flex', fd: 'column', ai: 'center' })}
  ${elemSize({ w: '120px', h: '177px' })}
  color: ${colors.primaryLightgrey};
  background: ${colors.secondaryDarkBlue};
`

const Title = styled.p`
  ${elemFonts({ fw: `${fontWeight.normal}`, fs: `${fontSize.size_2}` })}
`

const ItemIcon = styled.img`
  ${elemSize({ w: '55px', h: '60px' })}
`

const TemperatureValue = styled.div`
  ${elemPlacement({ dp: 'flex', jc: 'space-evenly' })}
  ${elemSize({ w: '100%' })}
`

interface ForecastSingleItemProps {
  max_temp: number | string
  min_temp: number | string
  id: number
  weather_state_abbr: string
  applicable_date: string | number
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
