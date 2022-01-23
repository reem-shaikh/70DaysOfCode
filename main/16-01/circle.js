import Shape from "./shape.js"
//shape (base class)
//children:  circle    rectangle
//children:              square  
class Circle extends Shape{
    constructor(radius){
        //since we extend it from parent class shape, thats why to indicate that this is a child, were using super() class
        super()
        this.radius = radius
    }

    getArea()
    {
        return Math.PI * this.radius * this.radius
    }

    whoami(){
        console.log('a circle bro')
    }
}

export default Circle