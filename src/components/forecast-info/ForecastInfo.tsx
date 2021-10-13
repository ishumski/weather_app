import { ReactElement } from 'react'
import styled from 'styled-components'
import { fontSize, fontWeight } from '../../assets/styles/fonts'
import { elemFonts, elemPlacement, elemSize } from '../../assets/styles/mixins'
import Card from '../../common/card'

const ForecastValue = styled.div`
  ${elemPlacement({ dp: 'flex', ai: 'baseline' })}
  margin-bottom: 20px;
`

const Value = styled.div`
  ${elemFonts({ fw: `${fontWeight.bolder}`, fs: `${fontSize.huge}` })}
  margin-right: 15px;
`

const Text = styled.span`
  ${elemFonts({
    fw: `${fontWeight.bold}`,
    fs: `${fontSize.secondaryIncreased}`
  })}
`

const AdditionalInfo = styled.div`
  ${elemSize({ w: '100%', maxw: '229px' })}
`

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
