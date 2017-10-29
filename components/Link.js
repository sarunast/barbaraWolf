import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NextLink from 'next/link'

const LinkStyle = styled.a`
  color: white;

  &:hover,
  &:focus,
  &:active {
    color: white;
  }
`

function Link({ href, children, alt }) {
  return (
    <NextLink href={href} passHref>
      <LinkStyle alt={alt}>{children}</LinkStyle>
    </NextLink>
  )
}

Link.propTypes = {
  href: PropTypes.node.isRequired,
  alt: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Link.defaultProps = {
  alt: '',
}

export default Link
