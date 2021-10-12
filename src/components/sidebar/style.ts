import styled from 'styled-components'
import { colors } from '../../assets/styles/colors'
import { fontSize, fontWeight } from '../../assets/styles/fonts'
import {
  elemFonts,
  elemPlacement,
  elemPosition,
  elemSize
} from '../../assets/styles/mixins'

export const SidebarContaner = styled.div`
  ${elemPlacement({ fl: '0.3', dp: 'flex', fd: 'column', ai: 'center' })}
  ${elemPosition({ pt: 'relative' })}
  padding: 42px 46px 52px;
  color: ${colors.primaryLightgrey};
  background: ${colors.secondaryDarkBlue};

  @media (max-width: 1150px) {
    padding: 18px 11px;
  }
`

export const Header = styled.div`
  ${elemPlacement({ dp: 'flex', jc: 'space-between', ai: 'center' })}
  ${elemSize({ w: '100%' })}
`

export const Body = styled.div`
  ${elemPlacement({ dp: 'flex', fd: 'column', ai: 'center' })}
  margin-top: 109px;

  @media (max-width: 1150px) {
    margin-top: 76px;
  }
`

export const SmallCloud = styled.img`
  ${elemSize({ w: '147px', h: '109px' })}
  ${elemPosition({ pt: 'absolute', t: '370px', r: '-11px' })}
  opacity: 0.1;

  @media (max-width: 1150px) {
    ${elemSize({ w: '127.45px', h: '94.51px' })}
    ${elemPosition({ t: '289.49px' })}
  }
`

export const MediumCloudRight = styled.img`
  ${elemPosition({ pt: 'absolute', t: '116px', r: '-80px' })}
  opacity: 0.1;

  @media (max-width: 1150px) {
    ${elemSize({ w: '176.01px', h: '130.05px' })}
    ${elemPosition({ t: '69.27px' })}
  }
`

export const MediumCloudLeft = styled.img`
  ${elemPosition({ pt: 'absolute', t: '103px', l: '-89px' })}
  opacity: 0.1;

  @media (max-width: 1150px) {
    ${elemSize({ w: '176.01px', h: '130.05px' })}
    ${elemPosition({ t: '58px' })}
  }
`

export const LargeCloud = styled.img`
  ${elemSize({ w: '248px', h: '183px' })}
  ${elemPosition({ pt: 'absolute', t: '266px', l: '-111px' })}
  opacity: 0.1;

  @media (max-width: 1150px) {
    ${elemSize({ w: '215.02px', h: '158.66px' })}
    ${elemPosition({ t: '199.32px' })}
  }
`

export const WeatherIcon = styled.img`
  ${elemSize({ w: '202px', h: '234px' })}
  opacity: none;

  @media (max-width: 1150px) {
    ${elemSize({ w: '150px', h: '174px' })}
  }
`

export const Temperature = styled.div`
  ${elemPlacement({ dp: 'flex', ai: 'baseline' })}
  ${elemFonts({ fw: `${fontWeight.normal}`, fs: ` ${fontSize.giant}` })}
  color: ${colors.primaryLightgrey};
  margin-top: 87px;

  @media (max-width: 1150px) {
    margin-top: 40px;
  }
`

export const CelsiusIcon = styled.p`
  ${elemFonts({ fs: `${fontSize.large}` })}
  margin: 0px;
  font-family: Calibri;
  color: ${colors.secondaryLightgrey};
`

export const TempValue = styled.p`
  ${elemFonts({ fw: `${fontWeight.bold}`, fs: ` ${fontSize.giant}` })}
  margin: 0px;
`

export const WeatherStateName = styled.h3`
  ${elemSize({ h: '42px' })}
  ${elemFonts({
  fw: `${fontWeight.bold}`,
  fs: `${fontSize.secondaryIncreased}`
})}
  margin-top: 87px;
  color: ${colors.secondaryLightgrey};

  @media (max-width: 1150px) {
    margin: 0px;
    margin-top: 23px;
  }
`

export const Footer = styled.div`
  ${elemPlacement({ dp: 'flex', fd: 'column' })}
  ${elemFonts({ fw: `${fontWeight.bold}` })}
  color: ${colors.primaryBlueGrey};
`

export const CurrentDate = styled.div`
  ${elemPlacement({ dp: 'flex', ai: 'center' })}
  ${elemSize({ w: '100%' })}
  ${elemFonts({
  fw: `${fontWeight.normal}`,
  fs: `${fontSize.secondaryRegular}`
})}
  margin-bottom: 10px;
  color: ${colors.primaryBlueGrey};

  @media (max-width: 1150px) {
    ${elemSize({ h: '20px' })}
    margin-top: 48px;
  }
`

export const DotIcon = styled.img`
  margin: 0 16px;
`

export const Location = styled.div`
  ${elemPlacement({ dp: 'flex', jc: 'center', ai: 'center' })}
  ${elemSize({ h: '35px' })}
  ${elemFonts({
  fw: `${fontWeight.bold}`,
  fs: ` ${fontSize.secondaryRegular}`
})}
  @media (max-width: 1150px) {
    ${elemSize({ h: '20px' })}
    margin-top: 33px;
    margin-bottom: 87px;
  }
`

export const LocationTitle = styled.p`
  ${elemSize({ w: '47px' })}
  margin-left: 9px;
`
