// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import injectE2E from '../../Tools/injectE2E'

const Wrapper = styled.div.attrs({
  'data-e2e': injectE2E,
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.5rem;
  box-sizing: border-box;
  font-family: ${(props) => props.theme['fontPrimary']};
  font-size: 0.9rem;
  font-weight: 500;
  color: ${(props) =>
    props.selected
      ? props.theme['togglerSelectedColor']
      : props.theme['togglerColor']};
  background-color: ${(props) =>
    props.selected
      ? props.theme['togglerSelectedBackgroundColor']
      : props.theme['togglerBackgroundColor']};
  cursor: pointer;
  text-transform: uppercase;
`

type PropsType = {
  +children: React.Node,
  +e2e?: string,
  +selected?: boolean,
}

const TogglerItem = ({ children, ...rest }: PropsType) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

TogglerItem.propTypes = {
  children: PropTypes.node,
  e2e: PropTypes.string,
  selected: PropTypes.bool,
}

TogglerItem.defaultProps = {
  e2e: 'defaultTogglerItem',
  selected: false,
}

export default TogglerItem
