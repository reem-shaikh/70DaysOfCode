//both modules we exported are imported here 
import Square from "./square.js";
import Rectangle from "./rect.js";
import Circle from "./circle.js";

const sqr1 = new Square(10)
console.log("square",sqr1.getArea())
sqr1.whoami()

const rect1 = new Rectangle(10, 15)
console.log(rect1.getArea()) //150
rect1.whoami()

const circle1 = new Circle(5)
console.log("circle", circle1.getArea())