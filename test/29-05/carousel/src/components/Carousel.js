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
            {/* <img src={images[2].img}/> */}

            {/* whenever someone clicks on left it decreases state by 1, if the state is 0, then dont decrease the state */}
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

            {/* whenever someone clicks on right it increases state by 1, and it keeps increasing until we reach the last image*/}
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