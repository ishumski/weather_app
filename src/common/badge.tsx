import { BadgeProps } from '../types/interfaces'

const Badge = ({ icon, alt, className, onClick }: BadgeProps): JSX.Element => (
  <button className={className} onClick={onClick}>
    <img src={icon} alt={alt} />
  </button>
)

export default Badge
