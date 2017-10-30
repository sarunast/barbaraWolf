import React from 'react'
import PropsTypes from 'prop-types'
import humps from 'lodash-humps'

import Layout from '../components/Layout'
import Gallery from '../components/Gallery'
import Api from '../services/prismic'

const Glass = ({ metaTitle, metaDescription, galleries }) => (
  <Layout metaTitle={metaTitle} metaDescription={metaDescription}>
    <Gallery galleries={galleries} />
  </Layout>
)

Glass.propTypes = {
  metaTitle: PropsTypes.string.isRequired,
  metaDescription: PropsTypes.string.isRequired,
}

Glass.getInitialProps = async function getInitialProps() {
  const glassPageData = await Api.getGlassPage()

  return humps(glassPageData)
}

export default Glass
