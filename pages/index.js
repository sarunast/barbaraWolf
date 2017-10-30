import React from 'react'
import PropsTypes from 'prop-types'
import styled from 'styled-components'
import humps from 'lodash-humps'

import Api from '../services/prismic'
import Layout from '../components/Layout'

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`

const Intro = styled.p`
  text-align: center;
`

const Image = styled.img`
  max-width: 100%;
  height: auto;
`

const Index = ({
  metaTitle, metaDescription, image, slogan, imageDescription,
}) => (
  <Layout metaTitle={metaTitle} metaDescription={metaDescription}>
    <ImageContainer>
      <Image src={image.url} alt={imageDescription} />
    </ImageContainer>
    <Intro>{slogan}</Intro>
  </Layout>
)

Index.propTypes = {
  metaTitle: PropsTypes.string.isRequired,
  metaDescription: PropsTypes.string.isRequired,
  image: PropsTypes.shape({
    url: PropsTypes.string.isRequired,
  }).isRequired,
  imageDescription: PropsTypes.string,
  slogan: PropsTypes.string.isRequired,
}

Index.defaultProps = {
  imageDescription: '',
}

Index.getInitialProps = async function getInitialProps() {
  const homePageData = await Api.getHomePage()

  return humps(homePageData)
}

export default Index
