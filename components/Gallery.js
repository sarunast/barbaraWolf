import React from 'react'
import PropsTypes from 'prop-types'
import styled from 'styled-components'

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

const Gallery = ({ galleries }) => (
  <Container>
    {galleries.map(gallery => (
      <Item key={gallery.id}>
        <Image src={gallery.image} alt={gallery.title} />
        <p>{gallery.title}</p>
      </Item>
    ))}
  </Container>
)

Gallery.propTypes = {
  galleries: PropsTypes.arrayOf(
    PropsTypes.shape({
      title: PropsTypes.string.isRequired,
      image: PropsTypes.string.isRequired,
      id: PropsTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

export default Gallery