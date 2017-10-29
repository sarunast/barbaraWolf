/* eslint-disable no-unused-expressions */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { injectGlobal } from 'styled-components'
import Head from 'next/head'

import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import Container from './Container'
import reset from './globalStyleReset'

injectGlobal`
  ${reset}

  body {
    background-color: #F5EEDD;
  }
`

const Main = styled.main`
  min-height: 300px;
  background-color: #BDBDBD;
  padding: 20px 15px;
  color: white;
`

function createTitle(title) {
  if (title === '') {
    return 'Barbara Wolf'
  }

  return `${title} - Barbara Wolf`
}

const Layout = ({ metaTitle, metaDescription, children }) => (
  <div>
    <Head>
      <title>{createTitle(metaTitle)}</title>
      <meta name="description" content={metaDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Header />
    <Container>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </Container>
  </div>
)

Layout.propTypes = {
  metaTitle: PropTypes.string,
  metaDescription: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  metaTitle: '',
}

export default Layout
