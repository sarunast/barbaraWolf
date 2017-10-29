import React from 'react'
import PropsTypes from 'prop-types'
import Layout from '../components/Layout'

const Background = ({ metaTitle, metaDescription }) => (
  <Layout metaTitle={metaTitle} metaDescription={metaDescription}>
    <span>Hello world !</span>
  </Layout>
)

Background.propTypes = {
  metaTitle: PropsTypes.string.isRequired,
  metaDescription: PropsTypes.string.isRequired,
}

Background.getInitialProps = async function getInitialProps() {
  return {
    metaTitle: 'test',
    metaDescription: 'description',
  }
}

export default Background
