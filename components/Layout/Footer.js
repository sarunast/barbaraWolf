import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const FooterContainer = styled.footer`
  background-color: #818181;
  color: white;
  padding: 5px 15px;
  text-align: right;
`

const LinkStyle = styled.a`
  color: white;

  &:hover,
  &:focus {
    color: white;
  }
`

export default function Footer() {
  return (
    <FooterContainer>
      <Link href="/disclaimer" passHref>
        <LinkStyle>
          Disclaimer
        </LinkStyle>
      </Link>
    </FooterContainer>
  )
}
