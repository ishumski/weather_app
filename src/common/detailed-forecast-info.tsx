import styled from 'styled-components'
import { fontSize, fontWeight } from '../assets/styles/fonts'
import { colors } from '../assets/styles/colors'
import { elemFonts, elemPlacement, elemSize } from '../assets/styles/mixins'
import { ReactElement } from 'react'

const ForecastInfoContainer = styled.div`
  ${elemPlacement({ dp: 'flex', fd: 'column', ai: 'center' })}
  ${elemSize({ w: '328px', h: '204px' })}
  padding-top: 22px;
  margin-bottom: 48px;
  color: ${colors.primaryLightgrey};
  background: ${colors.secondaryDarkBlue};

  @media (max-width: 1100px) {
    margin-bottom: 32px;
  }
`

const Title = styled.h1`
  ${elemFonts({ fw: `${fontWeight.normal}`, fs: `${fontSize.size_2}` })}
`

const ForecastValue = styled.div`
  ${elemPlacement({ dp: 'flex', ai: 'baseline' })}
  margin-bottom: 25px;
`

const Value = styled.div`
  ${elemFonts({ fw: `${fontWeight.bolder}`, fs: `${fontSize.size_7}` })}
  margin-right: 5px;
`

const Text = styled.span`
  ${elemFonts({ fw: `${fontWeight.bold}`, fs: `${fontSize.size_5}` })}
`

const AdditionalInfo = styled.div`
  ${elemSize({ w: '100%', maxw: '229px' })}
`

interface DetailedForecastInfoProps {
  title: string
  value: number
  text: string
  additionalInfo: ReactElement
}

const DetailedForecastInfo = ({
  title,
  value,
  text,
  additionalInfo
}: DetailedForecastInfoProps): JSX.Element => {
  return (
    <ForecastInfoContainer>
      <Title>{title}</Title>
      <ForecastValue>
        <Value>{value}</Value>
        <Text>{text}</Text>
      </ForecastValue>
      <AdditionalInfo>{additionalInfo}</AdditionalInfo>
    </ForecastInfoContainer>
  )
}

export default DetailedForecastInfo
