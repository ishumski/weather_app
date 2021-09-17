const Button = ({
  buttonLabel,
  className
}: {
  buttonLabel: string
  className: string
}): JSX.Element => <button className={className}>{buttonLabel}</button>

export default Button
