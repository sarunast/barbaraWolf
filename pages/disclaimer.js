import React from 'react'
import PropsTypes from 'prop-types'
import { RichText } from 'prismic-reactjs'
import hump from 'lodash-humps'

import Api from '../services/prismic'
import Layout from '../components/Layout'
import RichTextFormat from '../components/RichTextFormat'

const Disclaimer = ({ metaTitle, metaDescription, text }) => (
  <Layout metaTitle={metaTitle} metaDescription={metaDescription}>
    <RichTextFormat>
      {RichText.render(text)}
    </RichTextFormat>
  </Layout>
)

Disclaimer.propTypes = {
  metaTitle: PropsTypes.string.isRequired,
  metaDescription: PropsTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  text: PropsTypes.any.isRequired,
}

Disclaimer.getInitialProps = async function getInitialProps() {
  const disclaimerPageData = await Api.getDisclaimerPage()

  return hump(disclaimerPageData)
}

export default Disclaimer
