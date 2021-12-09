// In arrays, adding a new data is comparatively easy. (arr.push)
// In object, we get more versatality, we can add stuff like done flag (to mark as done).

// Looping through an array is more easy than looping through an object.

// A single task can be represented by an Object. Because we are going to have multiple porperties of that task. (Such as priority, category, mark as done).

// The task list will be an array of individual task objects.

// Finally our DS -> Array of Objects.

let tasks = [];

let btn = document.getElementById('add_task_button');
// let btn1 = document.querySelector('#add_task_button');
// console.log(btn);
// console.log(btn1);

let delete_task = function (event) {
    let id = event.target.id;
    let element_id = `li_${id}`;
    
    let elem = document.getElementById(element_id);
    console.log(elem);
    elem.remove();

    let arr = id.split("_");
    let index = arr[1];
    console.log(index);

    tasks.splice(index, 1);
}

let edit_task = function(event) {
    let id = event.target.id;
    let index = id.split("_")[1];
    let edit_task = prompt("Enter the updated Task");
    tasks[index] = edit_task;
    display();
}

let display = function () {
    // let ul_list = document.getElementsByTagName
    // let ul_list = document.getElementsByClassName('list');
    let ul = document.getElementById('task_list');
    ul.innerText = "";
    for(let i = 0; i < tasks.length; i++) {
        let single_task = tasks[i];

        let new_elem = document.createElement('li');
        new_elem.innerText = single_task;

        let btn = document.createElement('button');
        btn.innerText = "❌";
        btn.addEventListener('click', delete_task);

        let edit_btn = document.createElement('button');
        edit_btn.innerText = '📝';
        edit_btn.addEventListener('click', edit_task);


        edit_btn.id = `edit_${i}`;        
        btn.id = `btn_${i}`;
        new_elem.id = `li_btn_${i}`;

        new_elem.appendChild(btn);
        new_elem.appendChild(edit_btn);
        ul.appendChild(new_elem);
    }
}

let add_task = function () {
    let input = document.getElementsByName('task')[0];
    let val = input.value;
    tasks.push(val);
    display();
}

btn.addEventListener('click', add_task);
