/* eslint-disable function-paren-newline */
import React from 'react'
import PropsTypes from 'prop-types'
// import styled from 'styled-components'

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
      id: PropsTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

Painting.getInitialProps = async function getInitialProps() {
  return {
    metaTitle: 'Paintings',
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

export default Painting
