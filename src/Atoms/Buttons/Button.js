// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import injectE2E from '../../Tools/injectE2E'
import { fontSize, theme, type ThemePropType } from '../../Tools/interpolation'

type HtmlButtonType = 'button' | 'reset' | 'submit'

export type PropsType = {
  +bounced?: boolean,
  +children?: React.Node,
  +disabled?: boolean,
  +e2e?: string,
  +type: HtmlButtonType,
}

const Wrapper = styled.button.attrs(injectE2E)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  line-height: 2.5rem;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  color: ${theme('buttonColor')};
  background-color: ${theme('buttonBackgroundColor')};
  border: none;
  border-radius: ${theme('buttonBorderRadius')};
  cursor: ${(props: PropsType) =>
    props.disabled === true ? 'not-allowed' : 'pointer'};
  outline: none;
  transition: all 0.3s ease 0s;
  opacity: ${(props: PropsType) => (props.disabled === true ? 0.5 : 1)};
  font-family: ${theme('fontPrimary')};
  font-size: ${fontSize('md')};
  font-weight: 600;

  &:hover {
    background-color: ${(props: PropsType & ThemePropType) =>
      props.disabled === true
        ? theme('buttonBackgroundColor')(props)
        : theme('buttonHoverColor')(props)};
    transform: ${(props: PropsType) =>
      props.bounced === true ? 'scale(0.95)' : 'none'};
  }
`
const Button = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

Button.propTypes = {
  bounced: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  e2e: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
}

Button.defaultProps = {
  bounced: false,
  disabled: false,
  e2e: 'defaultButton',
  type: 'button',
}

export default Button
