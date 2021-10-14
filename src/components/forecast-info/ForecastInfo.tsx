import { ReactElement } from 'react'
import Card from '../../common/card'
import { AdditionalInfo, ForecastValue, Text, Value } from './style'

interface ForecastInfoProps {
  height?: string
  width?: string
  mb?: string
  title?: string
  value?: number
  text?: string
  additionalInfo?: ReactElement
}
const ForecastInfo = ({
  height,
  width,
  mb,
  value,
  text,
  title,
  additionalInfo
}: ForecastInfoProps): JSX.Element => {
  return (
    <Card
      height={height}
      width={width}
      mb={mb}
      title={title}
      content={
        <ForecastValue>
          <Value>{value}</Value>
          <Text>{text}</Text>
        </ForecastValue>
      }
      cardInfo={<AdditionalInfo>{additionalInfo}</AdditionalInfo>}
    />
  )
}

export default ForecastInfo
