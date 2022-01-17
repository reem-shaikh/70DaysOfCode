class bookClass {
    //private information
    //use # to denote the variable is private
    #API_KEY = "very secret"

    constructor(title, author, release_date){
        this.title = title;
        this.author = author;
        this.release_date = release_date;
    }

    //creating a method 
    getSummary() {
        const summary = `The book ${this.title} is written by ${this.author}`
        return summary
    }

    //creating a private function
    #showSomeData() {
        console.log('API')
        return 'API response'
    }

}

const book3 = new bookClass('harry potter', 'rowling')
//We created private function
console.log(book3.#showSomeData())
//we created private constant 
console.log(book3.#API_KEY)

