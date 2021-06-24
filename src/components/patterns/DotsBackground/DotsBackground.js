import styled, { css } from 'styled-components'
import { slide } from 'components/keyframes'
import { Box } from 'components/elements'
import is from 'styled-is'

const darkStyle = css`
  background: #000;
  background-color: #000;
  background-image: radial-gradient(
      rgba(215, 215, 215, 0.15) 1px,
      transparent 0
    ),
    radial-gradient(rgba(215, 215, 215, 0.15) 1px, transparent 0);
`

const lightStyle = css`
  background-image: radial-gradient(#d7d7d7 1px, transparent 0),
    radial-gradient(#d7d7d7 1px, transparent 0);
`

const animateStyle = css`
  animation: ${slide} 100s linear infinite;
  animation-direction: reverse;
`

const Dots = styled(Box)`
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    width: 400%;
    height: 100%;
    z-index: -1;

    ${props => (props.theme === 'dark' ? darkStyle : lightStyle)}
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;

    ${is('animate')`${animateStyle}`};
  }
`

Dots.defaultProps = {
  theme: 'light',
  animate: true
}

export default Dots
