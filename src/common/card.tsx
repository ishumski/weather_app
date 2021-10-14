import { ReactElement } from 'react'
import styled from 'styled-components'
import { colors } from '../assets/styles/colors'
import { fontSize, fontWeight } from '../assets/styles/fonts'
import { elemFonts, elemPlacement } from '../assets/styles/mixins'

const CardContainer: any = styled.div`
  ${elemPlacement({ dp: 'flex', fd: 'column', ai: 'center' })}
  width: ${(props: any) => props.width};
  height: ${(props: any) => props.height};
  margin-bottom: ${(props: any) => props.mb};
  color: ${colors.primaryLightgrey};
  background: ${colors.secondaryDarkBlue};

  @media (max-width: 1175px) {
    margin-bottom: 32px;
  }
`

const Title: any = styled.p`
  ${elemFonts({ fw: `${fontWeight.normal}`, fs: `${fontSize.primaryRegular}` })}
`

interface CardProps {
  height?: string
  width?: string
  mb?: string
  id?: number
  content?: ReactElement
  title?: string
  cardInfo?: ReactElement
}

const Card = ({
  height,
  width,
  mb,
  id,
  content,
  title,
  cardInfo
}: CardProps): JSX.Element => {
  return (
    <CardContainer width={width} height={height} mb={mb} id={id}>
      <Title>{title}</Title>
      <div>{content}</div>
      {cardInfo ? <div>{cardInfo}</div> : null}
    </CardContainer>
  )
}

export default Card
