//importing rectangle 
import Rectangle from "./rect.js"

class Square extends Rectangle{
    constructor(side) {
      super(side, side)
    }

    whoami(){
        console.log('a square')
    }
}

//creating an object 
// const sqr1 = new Square(10)
// //we can access getArea() function from the parent class "Rectangle"
// console.log(sqr1.getArea())
// sqr1.whoami()

//square is created as module and exported 
export default Square