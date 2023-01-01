// navbar
// were adding this class such that everytime we scroll vertically  downwards and it goes grater than 200 the .bg class is added 
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(scrollY >= 200){
        // bg class 
        navbar.classList.add('bg');
    } else {
        navbar.classList.remove('bg');
    }

    console.log(scrollY);
})

// image collage 

// destructuring the elements inside collage-img
const collageImages = [...document.querySelectorAll('.collage-img')];
collageImages.map((item, i) => {
    item.addEventListener('mouseover', () => {
        // when mouse is over the item 
        collageImages.map((image, index) => {
            if(index != i) {
                // if its not equal to hovered i, set the background images to blurr 
                image.style.filter = 'blur(10px)'; 
                // bring the clicked image to the front 
                item.style.zIndex = 2;
            }
        })
    })

    // add mouseleave event - such that when you leave the mouse the images become unblured 
    item.addEventListener('mouseleave', () => {
        collageImages.map((image, index) => {
            image.style = null; 
        })
    })
})