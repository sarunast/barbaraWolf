import React from 'react'
import PropsTypes from 'prop-types'
import humps from 'lodash-humps'
import { RichText } from 'prismic-reactjs'

import Layout from '../components/Layout'
import Api from '../services/prismic'
import RichTextFormat from '../components/RichTextFormat'

const Background = ({
  metaTitle, metaDescription, introduction, vita,
}) => (
  <Layout metaTitle={metaTitle} metaDescription={metaDescription}>
    <RichTextFormat>
      {RichText.render(introduction)}
      {RichText.render(vita)}
    </RichTextFormat>
  </Layout>
)

Background.propTypes = {
  metaTitle: PropsTypes.string.isRequired,
  metaDescription: PropsTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  introduction: PropsTypes.any.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  vita: PropsTypes.any.isRequired,
}

Background.getInitialProps = async function getInitialProps() {
  const backgroundPageData = await Api.getBackgroundPage()

  return humps(backgroundPageData)
}

export default Background
