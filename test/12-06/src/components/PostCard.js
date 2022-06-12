import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState} from 'react'
//MUI theme overide 
import {ThemeProvider} from '@mui/material'
import theme from './theme.js'

export default function PostCard(props) {
  console.log(props.image_details)
  console.log(props.click)
  
  const [buttonText, setButtonText] = useState('follow');
  const [suscribe, setSuscribe] = useState('Suscribe')

  const followButton = () => {
    //setButtonText('Followed');
    if(buttonText === 'follow'){
      setButtonText('unfollow');
    }else{
      setButtonText('follow');
    }

  }

  const suscribeButton = () => {
   //setSuscribe('Suscribed')
   //using ternary operator 
   (suscribe==="Suscribe" ? setSuscribe('suscribed') : setSuscribe('Suscribe'))

   props.click(props.image_details.id);
  }

  return (
  <ThemeProvider theme={theme}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        //image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        image={props.image_details.urls.thumb}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.image_details.user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* {props.image_details.description} */}
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' onClick={followButton} >{buttonText}</Button>
        <Button variant='contained' color='secondary' onClick={suscribeButton}>{suscribe}</Button>
      </CardActions>
    </Card>
  </ThemeProvider>
  );
}
