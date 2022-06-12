import React from 'react'
import {Stack} from '@mui/material'
import PostCard from './PostCard'
import {Col} from 'react-bootstrap'

function PostList(props) {
    console.log(props.images)
   //const arr = [true, true, true]

  return (
    <>
    {/* justofy content works on main axis (y)
        alignitems works on cross axis (x) */}
        <Stack  mt={4} mb={4} alignItems="center" display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-evenly" spacing={0.6}>

           {props.images.map((single_image, idx) => {
                return (
                    // <Item key='idx'>
                    //     <PostCard  />
                    // </Item>
                    <Col key='idx'>
                        <PostCard
                        click={props.cardClick} 
                        image_details={single_image} />
                    </Col>
                )
            })}
        </Stack>
    </>
  )
}

export default PostList