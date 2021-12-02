 //create calculator object with 4 different functionalities 

        //similarly we can even define function inside a key in the object 
        var calculator = {
            //calculator objects

            'num1': 0,
            'num2': 0,
            'mul' : function ()
            {
            let product = this.num1 * this.num2;
                        
            return product;
            },

            'div' : function(a,b)
            {
            let total = a/b;
            return total;
            },

            'sum' : function(a,b)
            {
            let total = a+b;
            return total;
            },
            'diff': function(a,b)
            {
            let total = a-b;
            return total;
            },

        };

        calculator.num1 = 10;
        calculator.num2 = 3; 

        var product = calculator.mul();
        console.log(product);


//refer with help of object name from outside 
//within the execution context, this keyword should be used 