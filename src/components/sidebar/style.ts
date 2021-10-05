import styled from 'styled-components'
import { colors } from '../../assets/styles/colors'
import { fontSize, fontWeight } from '../../assets/styles/fonts'
import { elemFonts, elemPlacement, elemSize } from '../../assets/styles/mixins'

export const SidebarContaner = styled.div`
  ${elemPlacement({ fl: '0.3', dp: 'flex', fd: 'column', ai: 'center' })}
  padding: 42px 46px 52px;
  color: ${colors.primaryLightgrey};
  background: ${colors.secondaryDarkBlue};
  position: relative;
`

export const Header = styled.div`
  ${elemPlacement({ dp: 'flex', jc: 'space-between', ai: 'center' })}
  ${elemSize({ w: '100%' })}
`

export const Body = styled.div`
  ${elemPlacement({ dp: 'flex', fd: 'column', ai: 'center' })}
  ${elemSize({ h: ' 641px' })}
  margin-top: 109px;
`

export const SmallCloud = styled.img`
  ${elemSize({ w: '147px', h: '109px' })}
  top: 370px;
  right: -11px;
  opacity: 0.1;
  position: absolute;
`

export const MediumCloudRight = styled.img`
  position: absolute;
  opacity: 0.1;
  top: 116px;
  right: -80px;
`

export const MediumCloudLeft = styled.img`
  position: absolute;
  opacity: 0.1;
  top: 103px;
  left: -89px;
`

export const LargeCloud = styled.img`
  ${elemSize({ w: '248px', h: '183px' })}
  position: absolute;
  opacity: 0.1;
  top: 266px;
  left: -111px;
`

export const WeatherIcon = styled.img`
  ${elemSize({ w: '202px', h: '234px' })}
  opacity: none;
`

export const Temperature = styled.div`
  ${elemSize({ w: '100%' })}
  ${elemFonts({ fw: `${fontWeight.normal}`, fs: ` ${fontSize.size_8}` })}
  color: ${colors.primaryLightgrey};
  margin-top: 87px;
`

export const WeatherStateName = styled.h3`
  ${elemSize({ h: '42px' })}
  ${elemFonts({ fw: `${fontWeight.bold}`, fs: `${fontSize.size_5}` })}
  margin-top: 87px;
  color: ${colors.secondaryLightgrey};
`

export const Footer = styled.div`
  ${elemPlacement({ dp: 'flex', fd: 'column' })}
  ${elemFonts({ fw: `${fontWeight.bold}` })}
  color: ${colors.primaryBlueGrey};
`

export const CurrentDate = styled.div`
  ${elemPlacement({ dp: 'flex' })}
  ${elemSize({ w: '100%' })}
  ${elemFonts({ fw: `${fontWeight.normal}`, fs: `${fontSize.size_3}` })}
  margin-bottom: 10px;
  color: ${colors.primaryBlueGrey};
`

export const DotIcon = styled.img`
  margin: 0 16px;
`

export const Location = styled.div`
  ${elemPlacement({ dp: 'flex', jc: 'center', ai: 'center' })}
  ${elemSize({ h: '35px' })}
  ${elemFonts({ fw: `${fontWeight.bold}`, fs: ` ${fontSize.size_3}` })}
`

export const LocationTitle = styled.p`
  ${elemSize({ w: '47px' })}
  margin-left: 9px;
`
