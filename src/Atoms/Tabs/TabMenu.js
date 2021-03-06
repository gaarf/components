// @flow strict
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'

import { prop, screenSize, theme } from '../../Tools/interpolation'

export type PropsType = {
  +children?: React.Node,
  +height?: string,
  +toggled?: boolean,
  +width?: string,
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${prop<PropsType>('width')};
  min-height: ${prop<PropsType>('height')};
  border-bottom: 0.125rem solid ${theme('tabMenuBorderColor')};
  box-sizing: border-box;
`
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  width: 100%;
  min-height: 100%;

  @media (max-width: ${screenSize('sm')}) {
    & > .disabled {
      display: ${(props: PropsType) =>
        props.toggled === true ? 'flex' : 'none'};
    }
  }

  @media (min-width: ${screenSize('sm')}) {
    flex-direction: row;
    align-items: center;
  }
`

const TabMenu = ({ children, toggled, ...rest }: PropsType) => (
  <Wrapper {...rest}>
    <Container toggled={toggled}>{children}</Container>
  </Wrapper>
)

TabMenu.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  toggled: PropTypes.bool,
  width: PropTypes.string,
}

TabMenu.defaultProps = {
  height: '3rem',
  toggled: false,
  width: '100%',
}

export default TabMenu
