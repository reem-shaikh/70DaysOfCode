const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  function createNode(data) {
    // if(typeof data !== "string") {
    //   return null;
    // }
  
    return {
      next: undefined,
      data: data
    };
  }
  
  let root = createNode();
  
  function insert() {
    readline.question(`Enter the data? `, data => {
      let head = root;

      //while head does not point to null 
      while(head.next !== undefined) {
        //keep updating head
        //note that head pointer keeps incrementing, thats why we can even name it current 
        head = head.next;
      }
  
      const newNode = createNode(data);

     //initially tail = head 
      let tail = head
      //the pointer of tail points to newNode 
      tail.next = newNode;

      // tail should point at the newNode 
      tail = newNode;

      printMenu();
    });
  }
  
  function traverse() {
    //let the current pointer be at the first node 
    let head = root.next;

    //while head pointer doesnt point at null
    //i.e if the head pointer has more nodes in the linked list 
    while(head !== undefined) {
      console.log(head.data);
      //then keep incrementing the head pointer
      head = head.next;
    }
    printMenu();
  }
  
  // linked list 2-> 10 -> 16 -> 20
  // reversed: 2 <- 10 <- 16 <- 20
  function reverse() {
    let first = root;       

    let second = first.next; 
    let temp = undefined;   

    while(second !== undefined) {
      first = second.next;
      second.next = temp;
      temp = second;
      second = first;
    }

    root = createNode();

    root.next = temp;
    second = temp;
  
    // while(head !== undefined) {
    //   console.log(head.data);
    //   head = head.next;
    // }
  
    printMenu();
  }
  
  function prepend() {
    readline.question(`Enter the data? `, data => {
      //newNode is the node you want to enter 
      const newNode = createNode(data);
      //point newNode to root (i.e the first node)
      newNode.next = root.next;

      //now root pointer is at the newNode 
      root.next = newNode;

      printMenu();
    });
  }
  
  function printMenu() {
    readline.question(`What do you want to do (insert/prepend/traverse/reverse/exit)? `, data => {
      switch(data) {
        case 'insert':
          insert();
          break;
        case 'prepend':
          prepend();
          break;
        case 'traverse':
          traverse();
          break;
        case 'reverse':
          reverse();
          break;
        case 'exit':
          break;
        default:
          console.log("Invalid input, please try again");
          printMenu();
          break;
      }
    });
  }
  
  printMenu();
  