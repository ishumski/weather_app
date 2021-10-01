import styled from 'styled-components'
import { box } from '../assets/styles/colors'
import { elemPlacement, elemSize } from '../assets/styles/mixins'

const BadgeDefault: any = styled.button`
  ${elemPlacement({ dp: 'flex', jc: 'center', ai: 'center' })}
  ${elemSize({ w: '40px', h: '40px' })}
  background: ${(props: any) => props.background};
  box-shadow: 0px 4px 4px ${box.shadow};
  border: none;
  border-radius: 50px;
  cursor: pointer;
`

interface BadgeProps {
  background: string
  children: any
  onClick?: React.MouseEventHandler
}

const Badge = ({ background, children, onClick }: BadgeProps): JSX.Element => (
  <BadgeDefault background={background} onClick={onClick}>
    {children}
  </BadgeDefault>
)

export default Badge
