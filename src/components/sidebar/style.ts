import styled from 'styled-components'
import Badge from '../../common/badge'

import {
  background,
  fontSize,
  fontWeight,
  primary,
  white
} from '../../assets/styles/styles'

export const SidebarContaner = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 41px 41px 10px;
  color: ${white};
  background: ${background.color_2};
  position: relative;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const GeopositionBadge: any = styled(Badge)``

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 641px;
  margin-top: 95px;
`

export const SmallCloud = styled.img`
  position: absolute;
  opacity: 0.1;
  top: 370px;
  right: -11px;
  width: 147px;
  height: 109px;
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
  position: absolute;
  opacity: 0.1;
  top: 266px;
  left: -111px;
  width: 248px;
  height: 183px;
`

export const WeatherIcon = styled.img`
  width: 202px;
  height: 234px;
  opacity: none;
`

export const Temperature = styled.div`
  width: 100%;
  margin-top: 80px;
  margin-bottom: 0;
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.size_8};
`

export const WeatherStateName = styled.h3`
  margin-top: 80px;
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.size_5};
  color: ${primary.color_2};
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: ${fontWeight.bold};
  color: ${primary.color_3};
`

export const CurrentDate = styled.div`
  width: 100%;
  display: flex;
  font-size: ${fontSize.size_3};
  height: 57;
  margin-bottom: 10px;
`
export const DotIcon = styled.img`
  margin: 0 16px;
`

export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  font-size: ${fontSize.size_3};
`

export const LocationTitle = styled.p`
  margin-left: 9px;
  width: 47px;
`
