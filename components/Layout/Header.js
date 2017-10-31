import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import Container from './Container'

const Background = styled.header`
  background-color: #DCDCDC;
  padding-top: 30px;
`

const HeaderContainer = styled.div`
  height: 100px;
  background-color: white;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0 15px;
`

const HeaderTitle = styled.h1`
  text-align: right;
  font-weight: 300;

  span {
    font-size: 1rem;
  }
`

const TitleLink = styled.a`
  color: black;
  font-weight: 500;

  &:hover,
  &:focus {
    text-decoration: none;
    color: black;
  }
`

export default function Header() {
  return (
    <Background>
      <Container>
        <HeaderContainer>
          <HeaderTitle>
            <Link href="/" passHref>
              <TitleLink>
                Barbara Wolf<span>.net</span>
              </TitleLink>
            </Link>
          </HeaderTitle>
        </HeaderContainer>
      </Container>
    </Background>
  )
}
