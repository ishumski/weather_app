import styled from 'styled-components'
import SearchIcon from '../../assets/images/search.svg'
import Button from '../../common/button'
import { colors } from '../../assets/styles/colors'
import {
  elemFonts,
  elemPlacement,
  elemPosition,
  elemSize
} from '../../assets/styles/mixins'
import { fontSize, fontWeight } from '../../assets/styles/fonts'

export const SidebarSearchContainer = styled.div`
  ${elemPosition({ pt: 'absolute', t: '0', b: '0', l: '0', r: '0' })}
  padding: 19.21px 46px 0px 47px;
  background: ${colors.secondaryDarkBlue};
`

export const Header = styled.div`
  ${elemPlacement({ dp: 'flex', jc: 'end' })}
`

export const SearchLocation = styled.form`
  ${elemPlacement({ dp: 'flex' })}
  ${elemSize({ h: '48px' })}
  margin-top: 45.21px;
`

export const SearchLocationInput: any = styled.input`
  ${elemPlacement({ fl: '0.7' })}
  ${elemSize({ w: '100%' })}
  ${elemFonts({ fw: fontWeight.bold, fs: fontSize.size_3 })}
  background: url(${SearchIcon}) no-repeat scroll 15px 15px;
  padding-left: 48px;
  margin-right: 12px;
  font-family: Raleway;
  border: 1px solid ${colors.primaryLightgrey};
  color: ${colors.tertiaryBlueGrey};
  background-color: ${colors.transparent};
  outline: none;
`
export const SearchLocationButton = styled(Button)`
  ${elemPlacement({ dp: 'flex', fl: '0.3', jc: 'center', ai: 'center' })}
  ${elemSize({ w: '86px', h: ' 48px' })}
  ${elemFonts({ fw: `${fontWeight.bold}`, fs: `${fontSize.size_2}` })}
  background: ${colors.blue};
  color: ${colors.primaryLightgrey};
`
