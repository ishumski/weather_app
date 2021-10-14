import styled from 'styled-components'

import { colors } from '../../assets/styles/colors'
import { elemPlacement, elemSize } from '../../assets/styles/mixins'

export const ItemIcon = styled.img`
  ${elemSize({ w: '55px', h: '60px' })}
`

export const TemperatureValue = styled.div`
  ${elemPlacement({ dp: 'flex' })};
`

export const MinTempValue = styled.p`
  color: ${colors.secondaryLightgrey};
  margin-left: 15px;
`
