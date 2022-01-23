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

//show-modal and hide-modal are classes defined in css
const showModal =()=>{
     model.classList.add('show-modal')  
}

const hideModal =()=>{
    model.classList.remove('show-modal')
}

//populating values into the DOM
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

        //append book title and img into .book
        book_ctn.append(book_name, icon)
        //appending .book to .container 
        container.append(book_ctn)
        /*
        <div  class="book">
            <h2 id="book-name" class="book-name">To kill a mockingbird</h2>
            <img src='cross.png' alt="" class="cross-btn"/>
        </div> 

        */
    })
   // window.location.reload()
   delete_keys = document.querySelectorAll('.cross-btn')
   delete_keys.forEach((key)=>{
       key.addEventListener('click',deleteBook)
   })
}
 
//everytime we refresh the page, books is initalized to empty array, to resolve this 
//we define this function to prevent loosing values when we load the page
const setBooks = () => {
    if(localStorage.getItem('books')) {
        //check if books present in books array i.e in local storage
        //that means the fetchBooktitle had been executed 

        //if its present store it in array
        books = JSON.parse(localStorage.getItem('books'))
    } else {
        //if books are not found in the array
        //then push this message into the books array
        const test = {
            //iniitally when we enter the first book 
            //it loads manual
            title: 'not found'
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
    //were storing this book tilte inside local storage 
    //but local storage only renders json objects 
    //thats why we created a book object

    //adding the book object
   // books.push(book)

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
    console.log(localStorage.getItem("book"))

    book_title.value = ""
    //when someone clicks on the add button, then remove the value from the search bar
}


add_book_btn.addEventListener('click',fetchBookTitle)
hide_modal.addEventListener('click',hideModal)
add_btn.addEventListener('click',showModal)

//setBooks()