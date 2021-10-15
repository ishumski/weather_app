import styled from 'styled-components'

import { colors } from '../../assets/styles/colors'
import { elemPlacement, elemSize } from '../../assets/styles/mixins'

export const ItemIcon = styled.img`
  ${elemSize({ w: '55px', h: '60px' })}
  margin-bottom: 24px;
`

export const TemperatureValue = styled.div`
  ${elemPlacement({ dp: 'flex' })};

  p {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`

export const MinTempValue = styled.p`
  color: ${colors.secondaryLightgrey};
  margin-left: 15px;
`
