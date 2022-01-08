//defining a class which represents an instance of .pin-login

//to generate the pin numbers dyanamically 
class PinLogin{
    //object destructuring 
    constructor({el, loginEndpoint, redirectTo, maxNumbers = Infinity}) 
    {
        //using destructuring you can access all these elements individually 

        //get reference to these elements 
        this.el = 
        //el is defined in pincode.html
        {
            //creating object 
            main: el,
            numPad: el.querySelector(".pin-login-numpad"),
            textDisplay: el.querySelector(".pin-login-text")
        };

        this.loginEndpoint = loginEndpoint;
        this.redirectTo = redirectTo;
        this.maxNumbers = maxNumbers;
        this.value = "";
        //this.value -> current value that is going to be sent to login.php script 
        //value changes as user inputs the number 

        //generate all 12 keys right here 
        this._generatePad();  //private method 
    }

    _generatePad(){
        //defining an array
        const padLayout = [
            //definning keys inside it 
            "1", "2", "3",
            "4", "5", "6",
            "7", "8", "9",
            "backspace", "0", "done"
        ];

        padLayout.forEach(key => {
            const insertBreak = key.search(/[369]/) != -1;
            //if it can find 3,6,9 then insert a line break at this key

            //if it cant find, then return -1

            //create elements for key 
            const keyel = document.createElement("div");
            keyel.classList.add("pin-login-key")
            keyel.classList.toggle("material-icons", isNan(key))
            //if key is not a number, force .material-icons on the key 
            keyel.textContent = key;
            keyel.addEventListener("click", () => {
                this._handleKeyPress(key)
            });
            
            this.el.numPad.appendChild(keyel);

            //when you encounter a line break 
            if(insertBreak){
                this.el.numPad.appendChild(document.createElement('br'));
            }
        });
    }
}