// adding a new data is comparatively easy (arr.push)

//in object we get more versatility, we can add stuff like done flag to mark as done 

//a single task can be represented by an object because we are going to have multiple properties of that task 

//looping through array is easier than looping through object 

//Collection of objects stored in array 

//task list will be an array of individual task objects 

let tasks = [];

let btn = document.getElementById('addtaskbutton');
//getelementbyid: returns single element

//delete function
//attached as an event handler 
//event is an object of event, which we might use or we do not 

//when js calls event handler it will pass this
let delete_task = function(event)
{
    //when you click on the ❌ on the console event will be shown  
    //console.log(event);

    //console.log(event.target)
    //it tells which button it was clicked on 

    let id = event.target.id;

    let element_id = `li_${id}`;
    let elem = document.getElementById(element_id);
  
    console.log(elem);
    elem.remove();

    // alert('delete func call');
    let arr = id.split("_");
    let index = arr[1];
    console.log(index);
    //returns index of the deleted element 

    tasks.splice(index, 1);
}

//loop the list and create elements
let display = function()
{
    let ul = document.getElementById('task_list');
    //reference to ul 
    
    ul.innerText = "";
    //clearing out ul 

    for(let i=0; i<tasks.length; i++)
    //loop the list 
    {
        let single_task = tasks[i];

        //new_elem is stored in the memory reference 

        let new_elem = document.createElement('li');
        //create new element as a list

        new_elem.innerText = single_task;
        //new element = single task

        //appendChild: insert new li inserted at last of list 

        let btn = document.createElement('button');

        btn.innerText = "❌";

        btn.addEventListener('click', delete_task);
        //popup shows up when we click on ❌
        btn.id = `btn_${i}`;
        new_elem.id = `li_btn_${i}`;

        new_elem.appendChild(btn);

        ul.appendChild(new_elem);
        //append new element as child to the list 
    }
}

let fn = function()
{
    let input = document.getElementsByName('task')[0];
    //getelementbyname: this returns list of elements

    let val = input.value;
    tasks.push(val);
    display();
}

btn.addEventListener('click', fn);

