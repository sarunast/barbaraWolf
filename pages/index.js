import React from 'react'
import PropsTypes from 'prop-types'
import styled from 'styled-components'
import Prismic from 'prismic-javascript'

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
  metaTitle, metaDescription, image, description,
}) => (
  <Layout metaTitle={metaTitle} metaDescription={metaDescription}>
    <ImageContainer>
      <Image src={image.url} alt={image.title} />
    </ImageContainer>
    <Intro>{description}</Intro>
  </Layout>
)

Index.propTypes = {
  metaTitle: PropsTypes.string.isRequired,
  metaDescription: PropsTypes.string.isRequired,
  image: PropsTypes.shape({
    url: PropsTypes.string.isRequired,
    title: PropsTypes.string.isRequired,
  }).isRequired,
  description: PropsTypes.string.isRequired,
}

Index.getInitialProps = async function getInitialProps() {
  return {
    metaTitle: 'test',
    metaDescription: 'description',
    image: {
      url: '//via.placeholder.com/350x150',
      title: 'Image',
    },
    description: 'Off Target, detail',
  }
}

export default Index
