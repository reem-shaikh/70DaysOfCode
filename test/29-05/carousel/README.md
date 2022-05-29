## Carousel 
To create the Carousel effect, were using MUI icons for forward and backward scrolling and were acehiving carousel effect by manipulating the state which stores the current page were at. 

### Material Ui in React 18 
This is MUI's problem with the new version of react. They are working to release a new version of Material UI. in the meantime we can solve this problem by using --legacy-peer-deps. This is how: 
```bash
#Instead of this command npm install `@material-ui/core @material-ui/icons` that we used previously we'll use these commands
npm install @mui/material @emotion/react @emotion/styled --legacy-peer-deps

npm install @mui/icons-material --legacy-peer-deps
```
#### The code:
> App.js 
```bash
import "./App.css";
import React from "react";
import Carousel from "./components/Carousel.js";
function App() {
  return (
    <div className="App">
     <Carousel/>
    </div>
  );
}

export default App;
```
> CarouselData.js 
```bash
import City from '../Images/city.jpg'
import Salvador from '../Images/salvador.jpg'
import Ubc from '../Images/ubc.jpg'

# we'll define an array of different images here 
#images is an array of objects 
export const images = [
    {title: 'San Diego',
    subTitle: 'This is San Diego',
    img: City},

    {title: 'Salvador, Brazil',
    subTitle: 'This is Brazil',
    img: Salvador},

    {title: 'Ubc, Vancouver',
    subTitle: 'This is Ubc',
    img: Ubc}
]
```
> Carousel.js 
```bash
import React , {useState} from "react";
import './Carousel.css'

import { images } from '../Helpers/CarouselData'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Carousel = () => {
    const [currImg, setCurrImg] = useState(0)
    return(
        <div className="carousel">
            <div className="carouselInner"
            style={{backgroundImage: `url(${images[currImg].img})`}}>
            # <img src={images[2].img}/> 

            # whenever someone clicks on left it decreases state by 1, if the state is 0, then dont decrease the state 
            <div className="left"
                 onClick={() => {
                   currImg > 0 && setCurrImg(currImg - 1);
            }}>
                <ArrowBackIosIcon/>
            </div>
            <div className="center">
                <h1>{images[currImg].title}</h1>
                <p style={{color: 'white'}}>{images[currImg].subTitle}</p>
            </div>

            # whenever someone clicks on right it increases state by 1, and it keeps increasing until we reach the last image
            <div className="right"
                 onClick={() => {
                   currImg < images.length && setCurrImg(currImg + 1);
            }}>
                <ArrowForwardIosIcon/>
            </div>
            </div>
        </div>
    )
}

export default Carousel
```
