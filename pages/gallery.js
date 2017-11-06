/* eslint-disable function-paren-newline */
import React from 'react'
import PropsTypes from 'prop-types'
import styled from 'styled-components'
import humps from 'lodash-humps'

import Api from '../services/prismic'
import Layout from '../components/Layout'

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Img = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`

const Title = styled.p`
  margin-bottom: 30px;
`

const Gallery = ({
  metaTitle, metaDescription, title, images,
}) => (
  <Layout metaTitle={metaTitle} metaDescription={metaDescription}>
    <h2>{title}</h2>
    {images.map(image => (
      <ImageContainer key={`${image.url} ${image.title}`}>
        <Img src={image.url} alt={image.title} />
        <Title>{image.title}</Title>
      </ImageContainer>
    ))}
  </Layout>
)

Gallery.propTypes = {
  metaTitle: PropsTypes.string.isRequired,
  metaDescription: PropsTypes.string.isRequired,
  title: PropsTypes.string.isRequired,
  images: PropsTypes.arrayOf(
    PropsTypes.shape({
      url: PropsTypes.string.isRequired,
      title: PropsTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

Gallery.getInitialProps = async function getInitialProps({ query }) {
  const galleryPageData = await Api.getGalleryPage(query.uid)

  return humps(galleryPageData)
}

export default Gallery
