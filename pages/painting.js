/* eslint-disable function-paren-newline */
import React from 'react'
import PropsTypes from 'prop-types'
import humps from 'lodash-humps'

import Api from '../services/prismic'
import Layout from '../components/Layout'
import Gallery from '../components/Gallery'

const Painting = ({ metaTitle, metaDescription, galleries }) => (
  <Layout metaTitle={metaTitle} metaDescription={metaDescription}>
    <Gallery galleries={galleries} />
  </Layout>
)

Painting.propTypes = {
  metaTitle: PropsTypes.string.isRequired,
  metaDescription: PropsTypes.string.isRequired,
  galleries: PropsTypes.arrayOf(
    PropsTypes.shape({
      title: PropsTypes.string.isRequired,
      image: PropsTypes.string.isRequired,
      uid: PropsTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

Painting.getInitialProps = async function getInitialProps() {
  const paintingsPageData = await Api.getPaintingsPage()

  return humps(paintingsPageData)
}

export default Painting
