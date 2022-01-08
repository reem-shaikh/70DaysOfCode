class PinLogin {
    constructor ({el, loginEndpoint, redirectTo, maxNumbers = Infinity}) 
    //the default value of maxNumbers is infinity, but we've set it to 4 in pincode2.html
    {
        this.el = {
            main: el,
            numPad: el.querySelector(".pin-login__numpad"),
            textDisplay: el.querySelector(".pin-login__text")
        };

        this.loginEndpoint = loginEndpoint;
        this.redirectTo = redirectTo;
        this.maxNumbers = maxNumbers;
        this.value = "";

        this._generatePad();
    }

    _generatePad() {
        const padLayout = [
            "1", "2", "3",
            "4", "5", "6",
            "7", "8", "9",
            "backspace", "0", "done"
        ];

        padLayout.forEach(key => {
            const insertBreak = key.search(/[369]/) !== -1;
            const keyEl = document.createElement("div");

            keyEl.classList.add("pin-login__key");
            keyEl.classList.toggle("material-icons", isNaN(key));
            keyEl.textContent = key;
            keyEl.addEventListener("click", () => { this._handleKeyPress(key) });
            this.el.numPad.appendChild(keyEl);

            if (insertBreak) {
                this.el.numPad.appendChild(document.createElement("br"));
            }
        });
    }

    _handleKeyPress(key) {
        switch (key) {
            case "backspace":
                this.value = this.value.substring(0, this.value.length - 1);
                //target the specific key and remove it, while also reducing the length of the pincode
                break;
            case "done":
                this._attemptLogin();
                //when clicked on  ✔ _attemptlogin() function called
                break;
            default:
                //if we havent reached the maximum length=4 yet 
                //if key is a number 
                //keep increementing the key value 
                if (this.value.length < this.maxNumbers && !isNaN(key)) {
                    this.value += key;
                }
                break;
        }

        //update the textbox with this.value 
        this._updateValueText();
    }

    _updateValueText() {
        //this modification is for when we type in input field 
        //the text we entered is encrypted 
        //this.el.textDisplay.value = this.value

        //however if we type this in the console 
        //document.querySelector(".pin-login__text").value;
        //the value we entered is decoded

        //to do end to end sncryption we use this snippet of code 
        //show _ instead of underscore in console 
        this.el.textDisplay.value = "_".repeat(this.value.length);

        //remove error class if it exists, after updation 
        this.el.textDisplay.classList.remove("pin-login__text--error");
    }

    _attemptLogin() {
        //if value is entered 
        if (this.value.length > 0) {
            fetch(this.loginEndpoint, {
                //sending POST values with fetch API
                method: "post",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `pincode=${this.value}`

                //handling redirection and error 
            }).then(response => {
                if (response.status === 200) {
                    //on succesful login redirect to dashboard.html
                    window.location.href = this.redirectTo;
                } else {
                    //on unsuccesful login display the error class 
                    this.el.textDisplay.classList.add("pin-login__text--error");
                }
            })
        }
    }
}
