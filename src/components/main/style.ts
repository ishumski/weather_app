import styled from 'styled-components'
import { fontSize, fontWeight } from '../../assets/styles/fonts'
import { colors } from '../../assets/styles/colors'
import { elemFonts, elemPlacement, elemSize } from '../../assets/styles/mixins'

export const MainContainer = styled.div`
  ${elemPlacement({ dp: 'flex', fl: '0.7', jc: 'center' })}
  background: ${colors.primaryDarkBlue};
  z-index: 1;
`

export const Forecast = styled.div`
  ${elemSize({ w: '100%', minw: '670px', maxw: '704px' })}
  padding: 42px 123px 154px 154px;
`

export const TempContainer = styled.div`
  ${elemPlacement({ dp: 'flex', jc: 'flex-end' })}
  margin-bottom: 66px;
`

export const TempBadgets = styled.div`
  ${elemPlacement({ dp: 'flex', jc: ' space-between' })}
  ${elemSize({ w: '100%', maxw: '92px' })}
`

export const WindDirection = styled.div`
  ${elemPlacement({ dp: 'flex', jc: 'center', ai: 'center' })}
`

export const WindStatusBadge = styled.img`
  ${elemSize({ w: '15px', h: '15px' })}
  padding: 4px;
  margin: 5.71px;
  border-radius: 50px;
  background: ${colors.whiteOpacity};
  transform: rotate(-150deg);
`

export const ConsolidatedWeatherInfo = styled.div`
  ${elemPlacement({ dp: 'flex', jc: 'space-between' })}
`

export const Header = styled.div`
  ${elemPlacement({ dp: 'flex', fd: 'column' })}
  ${elemSize({ h: '283px' })}
  margin-bottom: 72px;
`

export const Body = styled.div`
  ${elemPlacement({ dp: 'flex', fd: 'column' })}
`

export const DetailedForecast = styled.div`
  ${elemPlacement({ dp: 'flex', jc: 'space-between', fw: 'wrap' })}
`

export const AditionalInfo = styled.div`
  ${elemPlacement({ dp: 'flex', fd: 'column' })}
`

export const Hightlights = styled.h1`
  ${elemFonts({ fw: ` ${fontWeight.bold}`, fs: ` ${fontSize.size_4}` })}
  color: ${colors.primaryLightgrey};
`
export const CreatedBy = styled.p`
  ${elemFonts({ fw: ` ${fontWeight.normal}`, fs: ` ${fontSize.size_1}` })}
  margin-bottom: 25px;
  text-align: center;
  color: ${colors.primaryLightgrey};
`
