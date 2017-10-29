import React from 'react'
import PropsTypes from 'prop-types'

import Layout from '../components/Layout'
import Gallery from '../components/Gallery'

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
  return {
    metaTitle: 'test',
    metaDescription: 'description',
    galleries: [
      {
        title: 'Title',
        image: '//via.placeholder.com/350x150',
        id: '1',
      },
      {
        title: 'Title',
        image: '//via.placeholder.com/350x150',
        id: '2',
      },
      {
        title: 'Title',
        image: '//via.placeholder.com/350x150',
        id: '3',
      },
      {
        title: 'Title',
        image: '//via.placeholder.com/350x150',
        id: '4',
      },
      {
        title: 'Title',
        image: '//via.placeholder.com/350x150',
        id: '5',
      },
      {
        title: 'Title',
        image: '//via.placeholder.com/350x150',
        id: '6',
      },
    ],
  }
}

export default Glass
