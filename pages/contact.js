import React from 'react'
import PropsTypes from 'prop-types'
import hump from 'lodash-humps'
import { RichText } from 'prismic-reactjs'

import Api from '../services/prismic'
import Layout from '../components/Layout'
import RichTextFormat from '../components/RichTextFormat'

const Contact = ({ metaTitle, metaDescription, text }) => (
  <Layout metaTitle={metaTitle} metaDescription={metaDescription}>
    <RichTextFormat>
      {RichText.render(text)}
    </RichTextFormat>
  </Layout>
)

Contact.propTypes = {
  metaTitle: PropsTypes.string.isRequired,
  metaDescription: PropsTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  text: PropsTypes.any.isRequired,
}

Contact.getInitialProps = async function getInitialProps() {
  const contactPageData = await Api.getContactPage()

  return hump(contactPageData)
}

export default Contact
