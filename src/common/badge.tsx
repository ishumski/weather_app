import styled from 'styled-components'
import { box } from '../assets/styles/styles'

const BadgeDefault: any = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props: any) => props.background};
  box-shadow: 0px 4px 4px ${box.shadow_1};
  border: none;
  border-radius: 50px;
  cursor: pointer;
`

interface BadgeProps {
  background: string
  children: any
  onClick: React.MouseEventHandler
}

const Badge = ({ background, children, onClick }: BadgeProps): JSX.Element => (
  <BadgeDefault background={background} onClick={onClick}>
    {children}
  </BadgeDefault>
)

export default Badge
