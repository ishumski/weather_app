import { ReactElement } from 'react'
import { elemPlacement, elemSize } from '../assets/styles/mixins'
import styled from 'styled-components'

const BadgeDefault: any = styled.button`
  ${elemPlacement({ dp: 'flex', jc: 'center', ai: 'center' })}
  ${elemSize({ w: '40px', h: '40px' })}
  background: ${(props: any) => props.background};
  border: none;
  outline: none;
  border-radius: 50px;
  cursor: pointer;
`

interface BadgeProps {
  background: string
  children: ReactElement
  onClick?: React.MouseEventHandler
}

const Badge = ({ background, children, onClick }: BadgeProps): JSX.Element => (
  <BadgeDefault background={background} onClick={onClick}>
    {children}
  </BadgeDefault>
)

export default Badge
