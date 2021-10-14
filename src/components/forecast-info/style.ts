import styled from 'styled-components'
import { fontSize, fontWeight } from '../../assets/styles/fonts'
import { elemFonts, elemPlacement, elemSize } from '../../assets/styles/mixins'

export const ForecastValue = styled.div`
  ${elemPlacement({ dp: 'flex', ai: 'baseline' })}
  margin-bottom: 20px;
`

export const Value = styled.div`
  ${elemFonts({ fw: `${fontWeight.bolder}`, fs: `${fontSize.huge}` })}
  margin-right: 15px;
`

export const Text = styled.span`
  ${elemFonts({
    fw: `${fontWeight.bold}`,
    fs: `${fontSize.secondaryIncreased}`
})}
`

export const AdditionalInfo = styled.div`
  ${elemSize({ w: '100%', maxw: '229px' })}
`
