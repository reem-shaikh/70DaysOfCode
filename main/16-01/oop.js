class Square {
    #side = 0 

    //static member 
    static APIKEY = "bro"

    constructor(side){
        this.#side = side 
    }

    getArea(){
        return Math.pow(this.#side, 2)
    }

    getPerimeter(){
        return this.#side *4
    }

    //static method 
    //this function doesnt use any obejct properties 
    //to create static method, use static keyword 
    //dont need an object to access static function 
    static whoAmI(){
        console.log('hello')
    }
}

const sqr = new Square(5)
console.log(sqr.getArea())
console.log(sqr.getPerimeter())

//invoking a static method, dont need an object to access it
//static is a part of the class, not of object 
Square.whoAmI()

//invoking a static member 
console.log(Square.APIKEY)