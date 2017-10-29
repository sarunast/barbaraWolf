import React from 'react'
import PropsTypes from 'prop-types'
import Layout from '../components/Layout'

const Contact = ({ metaTitle, metaDescription }) => (
  <Layout metaTitle={metaTitle} metaDescription={metaDescription}>
    <span>Hello world !</span>
  </Layout>
)

Contact.propTypes = {
  metaTitle: PropsTypes.string.isRequired,
  metaDescription: PropsTypes.string.isRequired,
}

Contact.getInitialProps = async function getInitialProps() {
  return {
    metaTitle: 'test',
    metaDescription: 'description',
  }
}

export default Contact
