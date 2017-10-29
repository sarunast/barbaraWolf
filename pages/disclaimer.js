import React from 'react'
import PropsTypes from 'prop-types'
import Layout from '../components/Layout'

const Disclaimer = ({ metaTitle, metaDescription }) => (
  <Layout metaTitle={metaTitle} metaDescription={metaDescription}>
    <span>Hello world !</span>
  </Layout>
)

Disclaimer.propTypes = {
  metaTitle: PropsTypes.string.isRequired,
  metaDescription: PropsTypes.string.isRequired,
}

Disclaimer.getInitialProps = async function getInitialProps() {
  return {
    metaTitle: 'test',
    metaDescription: 'description',
  }
}

export default Disclaimer
