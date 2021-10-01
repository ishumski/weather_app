import styled from 'styled-components'
import { fontSize, fontWeight } from '../assets/styles/fonts'
import { colors } from '../assets/styles/colors'
import { elemFonts, elemPlacement, elemSize } from '../assets/styles/mixins'

const ForecastInfoContainer = styled.div`
  ${elemPlacement({ dp: 'flex', fd: 'column', ai: 'center' })}
  ${elemSize({ w: '328px', h: '159px' })}
  padding-top: 22px;
  color: ${colors.primaryLightgrey};
  background: ${colors.secondaryDarkBlue};
`

const Title = styled.h1`
  ${elemFonts({ fw: `${fontWeight.normal}`, fs: `${fontSize.size_2}` })}
`

const ForecastValue = styled.div`
  ${elemPlacement({ dp: 'flex', ai: 'center' })}
  margin-bottom: 31px;
`

const Value = styled.div`
  ${elemFonts({ fw: `${fontWeight.bold}`, fs: `${fontSize.size_7}` })}
  margin-right: 15px;
`

const Text = styled.span`
  ${elemFonts({ fw: `${fontWeight.bold}`, fs: `${fontSize.size_6}` })}
`

interface ForecastInfoProps {
  title: string
  value: number
  text: string
}

const ForecastInfo = ({
  title,
  value,
  text
}: ForecastInfoProps): JSX.Element => {
  return (
    <ForecastInfoContainer>
      <Title>{title}</Title>
      <ForecastValue>
        <Value>{value}</Value>
        <Text>{text}</Text>
      </ForecastValue>
    </ForecastInfoContainer>
  )
}

export default ForecastInfo
