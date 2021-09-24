import styled from 'styled-components'
import { DetailedForecastInfoProps } from '../types/interfaces'

const ForecastInfoContainer = styled.div`
  width: 328px;
  height: 204px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 22px;
  margin-bottom: 48px;
  color: #e7e7eb;
  background-color: #1e213a;
`

const Title = styled.h1`
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`

const ForecastValue = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`

const Value = styled.div`
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  margin-right: 5px;

`
const Text = styled.span`
  font-family: Raleway;
  font-size: 40px;
  font-weight: 600;
`

const AdditionalInfo = styled.div`
  font-family: Raleway;
`

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
