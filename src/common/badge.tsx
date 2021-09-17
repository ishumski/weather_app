const Badge = ({
  icon,
  className
}: {
  icon: string
  className: string
}): JSX.Element => (
  <div className={className}>
    <img src={icon} alt="" />
  </div>
)

export default Badge
