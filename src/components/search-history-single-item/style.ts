import styled from 'styled-components'
import { colors } from '../../assets/styles/colors'
import { fontSize, fontWeight } from '../../assets/styles/fonts'
import { elemFonts, elemPlacement, elemSize } from '../../assets/styles/mixins'

export const SingleItem = styled.div`
  ${elemPlacement({ dp: 'flex', jc: 'space-between', ai: 'center' })}
  ${elemSize({ h: '64px' })}
  margin-bottom: 10px;
  padding: 0 16.42px 0 12px;
  fill: ${colors.transparent};
  border: 1px solid ${colors.transparent};
  cursor: pointer;

  &:hover {
    fill: ${colors.tertiaryBlueGrey};
    border: 1px solid ${colors.tertiaryBlueGrey};
  }
  @media (max-width: 1175px) {
    margin-bottom: 5px;
  }
`

export const CityName = styled.div`
  ${elemFonts({ fw: `${fontWeight.normal}`, fs: `${fontSize.primaryRegular}` })}
  color: ${colors.primaryLightgrey};
`
