import { ButtonProps } from '../types/interfaces'

const Button = ({ buttonLabel, className }: ButtonProps): JSX.Element => (
  <button className={className}>{buttonLabel}</button>
)

export default Button
