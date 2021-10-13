import styled from 'styled-components'
import { fontSize, fontWeight } from '../assets/styles/fonts'
import { box, colors } from '../assets/styles/colors'
import { elemFonts, elemSize } from '../assets/styles/mixins'

export const CustomButton: any = styled.button`
  ${elemSize({ w: '161px', h: '40px' })}
  ${elemFonts({ fw: `${fontWeight.normal}`, fs: `${fontSize.primaryRegular}` })}
  font-family: Raleway;
  border: none;
  color: ${colors.primaryLightgrey};
  background: ${colors.grey};
  box-shadow: 0px 4px 4px ${box.shadow};
  cursor: pointer;
`

interface ButtonProps {
  buttonLabel?: string
  className?: string
  onClick?: React.MouseEventHandler
}

const Button = ({
  buttonLabel,
  className,
  onClick
}: ButtonProps): JSX.Element => (
  <CustomButton type="button" onClick={onClick} className={className}>
    {buttonLabel}
  </CustomButton>
)

export default Button
