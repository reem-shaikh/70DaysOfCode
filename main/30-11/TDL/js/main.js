showtask();
let addtaskinput = document.getElementById("addtaskinput");
let addtaskbtn = document.getElementById("addtaskbtn");

addtaskbtn.addEventListener("click", function(){
    //get the value from the input field 
    addtaskinputval = addtaskinput.value;
    //if input doesnt contain any value, then dont add it to the localstorage / the array / input field 
    if(addtaskinputval.trim()!=0){

        let webtask = localStorage.getItem("localtask");
        //if there is nothing saved in the local storage of the name 'localtask' as yet 
        if(webtask == null){
            //then create a blank array called taskObj array 
            taskObj = [];
        }
        else{
            //but if there are contents in the 'localtask' local storage then, add the contents from the localstorage to the array, since whenever we refresh the page, the array literally gets initialised to null
            taskObj = JSON.parse(webtask);
            //convert JSON object to JS object to store it in the array 
        }
        //in taskObj[] push these value entered in the input field 
        taskObj.push({'task_name':addtaskinputval, 'completeStatus':false});
		
        //storing items in localstorage 
        //we set the items intaskObj[] to the localstorage
        //to save in local storage, we need to convert it to json format 

        //so basially when you enter a value in the input field it is saved in the local storage 
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        //set the input to empty string after setting it to the local storage 
        addtaskinput.value = '';
    }
    //we need to add the input value to the #addedtasklist 
    showtask();
})

// showtask
function showtask(){
    let webtask = localStorage.getItem("localtask");
    //if there is nothing in the 'localtask' key of localstorage 
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
    }

    let html = '';

    //were going to populate the DOM 
    let addedtasklist = document.getElementById("addedtasklist");

    //we take item and index in callbacks 
    taskObj.forEach((item, index) => {

        if(item.completeStatus==true){
            taskCompleteValue = `<td class="completed">${item.task_name}</td>`;
        }else{
            console.log('item', item)
            taskCompleteValue = `<td>${item.task_name}</td>`;
        }
        /*
                <tr>
                  <th scope="row">1</th>
                  <td>dummy task</td>
                  <td><button type="button" class="text-primary">
                    <i class="far fa-edit"></i>Edit 
                  </button></td>

                  <td><button type="button" class="text-primary">
                    <i class="far fa-trash"></i>Delete
                  </button></td>
                </tr>
        */
       //
        html += `<tr>
                    <th scope="row">${index+1}</th>
                    ${taskCompleteValue}

                    <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
                    <td><button type="button" class="text-success" id=${index}><i class="fa fa-check-square-o"></i>Complete</button></td>
                    <td><button type="button" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
                </tr>`;
    });
    //add this content in the #addedtasklist
    addedtasklist.innerHTML = html;
}

// edittask
function edittask(index){
    //when we click on edit button, we want the value to go to the input field 

    let saveindex = document.getElementById("saveindex");
    let addtaskbtn = document.getElementById("addtaskbtn");
    //initially save task button is hidden 
    let savetaskbtn = document.getElementById("savetaskbtn");

    //whenever you click on edit, it in this line 
    //<input type="hidden" id="saveIndex">
    //it adds the value to it based on the index you chose to edit 
    saveindex.value = index;
    //we get data from local storage 
    let webtask = localStorage.getItem("localtask");
    //and parse the data, and place it in taskobj[]
    let taskObj = JSON.parse(webtask); 
    
    //add the value we get from local storage to the input field 
    addtaskinput.value = taskObj[index];

    //now savetaskbutton is shown and addtask button is hidden
    //were toggling between 2 buttons 
    addtaskbtn.style.display="none";
    savetaskbtn.style.display="block";
}

// savetask
let savetaskbtn = document.getElementById("savetaskbtn");

savetaskbtn.addEventListener("click", function(){
    let addtaskbtn = document.getElementById("addtaskbtn");
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask); 

    //we save the value in this variable 
    let saveindex = document.getElementById("saveindex").value;
    
    // for (keys in taskObj[saveindex]) {
    //     if(keys == 'task_name'){
            taskObj[saveindex] = addtaskinput.value;
    //     }
    //   }

    savetaskbtn.style.display="none";
    addtaskbtn.style.display="block";

    localStorage.setItem("localtask", JSON.stringify(taskObj));
    addtaskinput.value='';

    //we call showtask() here because whenever we make changes in the input field, it adds to localstorage but TO DISPLAY ON DOM, we need to call showtask()
    showtask();
})
// deleteitem
function deleteitem(index){
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
}

//complete task
/* function completetask(index){
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    taskObj[index] = '<span style="text-decoration:line-through">' + taskObj[index] + '</span>';
    let addedtasklist = document.getElementById("addedtasklist");
    addedtasklist.addEventListener("click", function(e){
        console.log(addedtasklist)
    })
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
} */

// complete task
let addedtasklist = document.getElementById("addedtasklist");
    addedtasklist.addEventListener("click", function(e){
       // console.log(e);
        
        // showtask();
        let webtask = localStorage.getItem("localtask");
        let taskObj = JSON.parse(webtask);
        
        let mytarget = e.target;
        if(mytarget.classList[0] === 'text-success'){
        let mytargetid = mytarget.getAttribute("id");
        
        
        // let taskValue = taskObj[mytargetid]['task_name'];
        
        mytargetpresibling = mytarget.parentElement.previousElementSibling.previousElementSibling;
            
            // let mynewelem = mytargetpresibling.classList.toggle("completed");
            // taskObj.splice(mytargetid,1,mynewelem);
            for (keys in taskObj[mytargetid]) {
                if(keys == 'completeStatus' && taskObj[mytargetid][keys]==true){
                    taskObj[mytargetid].completeStatus = false;
                   // taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':false};
                }else if(keys == 'completeStatus' && taskObj[mytargetid][keys]==false){
                    taskObj[mytargetid].completeStatus = true;
                    //taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':true};
                }
              }
        //}
       // showtask();        
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        showtask();
    }
    })

    



// deleteall
let deleteallbtn = document.getElementById("deleteallbtn");
deleteallbtn.addEventListener("click", function(){
    let savetaskbtn = document.getElementById("savetaskbtn");
    let addtaskbtn = document.getElementById("addtaskbtn");
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
        taskObj = [];
    }
    savetaskbtn.style.display="none";
    addtaskbtn.style.display="block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();

})


// serachlist
let searchtextbox = document.getElementById("searchtextbox");
searchtextbox.addEventListener("input", function(){
    let trlist = document.querySelectorAll("tr");
    Array.from(trlist).forEach(function(item){
        let searchedtext = item.getElementsByTagName("td")[0].innerText;
        let searchtextboxval = searchtextbox.value;
        let re = new RegExp(searchtextboxval, 'gi');
        if(searchedtext.match(re)){
            item.style.display="table-row";
        }
        else{
            item.style.display="none";
        }
    })
})














