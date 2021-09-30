import styled from 'styled-components'
import {
  background,
  fontSize,
  fontWeight,
  primary
} from '../assets/styles/styles'

const ForecastInfoContainer = styled.div`
  width: 328px;
  height: 204px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 22px;
  margin-bottom: 48px;
  color: ${primary.color_1};
  background: ${background.color_2};
`

const Title = styled.h1`
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.size_2};
`

const ForecastValue = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`

const Value = styled.div`
  margin-right: 5px;
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.size_7};
`

const Text = styled.span`
  font-size: ${fontSize.size_6};
  font-weight: ${fontWeight.bold};
`

const AdditionalInfo = styled.div`
  max-width: 229px;
  width: 100%;
`

interface DetailedForecastInfoProps {
  title: string
  value: number
  text: string
  additionalInfo: any
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
