import Shape from "./shape.js"

class Rectangle extends Shape {
    constructor (width, height){
        super();
        this.width = width
        this.height = height
    }

    getArea() {
        return this.width * this.height
    }

    whoami(){
        console.log('a rectangle')
    }
}

// const rect1 = new Rectangle(10, 15)
// console.log(rect1.getArea()) //150
// rect1.whoami()

//Rectangle class created as module and exported 
export default Rectangle