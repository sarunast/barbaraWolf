/* eslint-disable function-paren-newline, jsx-a11y/anchor-is-valid */
import React from 'react'
import PropsTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from '../routes'

const Image = styled.img`
  width: 130px;
  height: 130px;
  object-fit: cover;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 0 -15px -15px;
`

const Item = styled.div`
  flex-basis: 25%;
  display: flex;
  padding: 0 0 15px 15px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const LinkStyle = styled.a`
  color: white;
  text-align: center;
  
  &:hover,
  &:focus {
    color: white;
  }
`

const Gallery = ({ galleries }) => (
  <Container>
    {galleries.map(gallery => (
      <Item key={gallery.uid}>
        <Link to={`/gallery/${gallery.uid}`} passHref >
          <LinkStyle>
            <Image src={gallery.image} alt={gallery.title} />
            <p>{gallery.title}</p>
          </LinkStyle>
        </Link>
      </Item>
    ))}
  </Container>
)

Gallery.propTypes = {
  galleries: PropsTypes.arrayOf(
    PropsTypes.shape({
      title: PropsTypes.string.isRequired,
      image: PropsTypes.string.isRequired,
      uid: PropsTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

export default Gallery
