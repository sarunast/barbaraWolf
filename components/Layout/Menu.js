import React from 'react'
import styled from 'styled-components'

import Link from '../Link'

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 1px solid gray;
  background-color: #bdbdbd;
  padding: 10px 15px;
`

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`

const ListItem = styled.li`
  display: inline-block;
  padding-right: 10px;

  &:last-child {
    padding-right: 0;
  }
`

export default function Menu() {
  return (
    <MenuContainer>
      <div>
        <List>
          <ListItem passHref>
            <Link href="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link href="/painting">Painting</Link>
          </ListItem>
          <ListItem>
            <Link href="/glass">Glass</Link>
          </ListItem>
          <ListItem>
            <Link href="/background">Background</Link>
          </ListItem>
          <ListItem>
            <Link href="/contact">Contact</Link>
          </ListItem>
        </List>
      </div>
      <div>
        {/* <List> */}
        {/* <ListItem> */}
        {/* <Link href="/">En</Link> */}
        {/* </ListItem> */}
        {/* <ListItem> */}
        {/* <Link href="/de">De</Link> */}
        {/* </ListItem> */}
        {/* </List> */}
      </div>
    </MenuContainer>
  )
}
