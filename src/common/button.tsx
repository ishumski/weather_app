import styled from 'styled-components'
import {
  background,
  box,
  fontSize,
  fontWeight,
  primary
} from '../assets/styles/styles'

export const CustomButton: any = styled.button`
  width: 161px;
  height: 40px;
  font-family: Raleway;
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.size_2};
  border: none;
  color: ${primary.color_1};
  background: ${background.color_4};
  box-shadow: 0px 4px 4px ${box.shadow_1};
  cursor: pointer;
`

interface ButtonProps {
  buttonLabel: string
  className: string
}

const Button = ({ buttonLabel, className }: ButtonProps): JSX.Element => (
  <CustomButton className={className}>{buttonLabel}</CustomButton>
)

export default Button
