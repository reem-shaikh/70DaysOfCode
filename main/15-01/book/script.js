const add_btn = document.querySelector('.add-btn')
const model = document.querySelector('.modal')
const hide_modal = document.querySelector('.hide-modal-btn')
const book_title= document.querySelector('#book-title')
const add_book_btn=document.querySelector('.add-book-btn')

const container = document.querySelector('.container')
const delete_books = document.querySelectorAll('.cross-btn')

console.log(book_title)
console.log(add_book_btn)

const deleteBook = () => {
    console.log('clicked')
}

delete_books.forEach((delete_key) => { 
    delete_key.addEventListener('click', delete_books)
})

let books=[]


const showModal =()=>{
     model.classList.add('show-modal')  
}

const hideModal =()=>{
    model.classList.remove('show-modal')
}


const BiuldUI = (books) => {
    books.forEach(book => {
        const book_ctn = document.createElement('div')
        book_ctn.classList.add('book')

        const book_name = document.createElement('h2')
        book_name.classList.add('book-name')

        book_name.innerText = book.title

        const icon = document.createElement('img')
        icon.classList.add('cross-btn')

        icon.setAttribute("src", "cross.png")

        book_ctn.append(book_name, icon)
        container.append(book_ctn)

    });
   // window.location.reload()
}
 

//we define this function to prevent loosing values when we load the page
const setBooks = () => {
    if(localStorage.getItem('books')) {
        //check if books present in local storage 
        //that means the fetchBooktitle had been executed 

        //if its present store it in array
        books = JSON.parse(localStorage.getItem('books'))
    } else {
        const test = {
            //iniitally when we enter the first book 
            //it loads manual
            title: 'manual'
        }
        //and it forcefully enters this book in this bookarray
        books.push(test)
    }

    BiuldUI(books)
} 

const fetchBookTitle =(event)=>{
    event.preventDefault()
    const book={
        //this is a JSON object 
        book_title:book_title.value
    }
    console.log("title", book_title);
    console.log("value", book_title.value)

    //adding the book object
   // books.push(book)


    //add UI to dom -> populate the DOM 
    //we are pushing JSON object to book array
    books.push(JSON.stringify(book))

    //json.stringify - convert JS object to JSON string

    //everytime we add a new book, its added to previous book array
    //console.log("books", books)

    //when we refresh the page, the book is removed 
    //to solve this issue 
    //we use local storage 

    //local storage exists on windows (make use of local hard disk memory (default memory))
    //unless you delete cache memory the data will remain in the local storage 

    //no matter how many times we refresh the page we want the book to remain 

    //syntax:
    //localStorage.setItem("key", "value")
    //localStorage.getItem("key")

    localStorage.setItem("books",book);
    console.log(localStorage.getItem(book))

    book_title.value = ""
}


add_book_btn.addEventListener('click',fetchBookTitle)
hide_modal.addEventListener('click',hideModal)
add_btn.addEventListener('click',showModal)

setBooks()