import React from 'react'
import Container from '@mui/material/Container'
import PostList from '../components/PostList'

const Home = (props) => {
console.log(props.images)
console.log(props.cardClick)

  return (
    <Container fixed>
      <PostList images={props.images} cardClick={props.cardClick}/>
    </Container>      
  )
}

export default Home 