tasks = JSON.parse(tasks)
console.log(tasks)

for(let task of tasks){
    document.getElementById("content").innerHTML += `
    <div class="card text-center shadow">
            <img src="https://via.placeholder.com/150" class="card-img-top img-thumbnail" alt="taskimage">
            <div class="card-body">
              <h5 class="card-title">${task.taskName}</h5>
              <p class="card-text text">${task.description}</p>
              <hr>
              <div class="text-start">
                <p><i class="bi bi-exclamation-square-fill"></i>
                     Priority Level 
                     <span class="importance bg-success p-1 text-white rounded">${task.importance}</span>
                    <button id="importanceincrease" class="importanceincrease btn"><i class="bi bi-arrow-up-square"></i></button>
                    <button id="importancedecrease" class="btn"><i class="importancedecrease bi bi-arrow-down-square"></i></button>
                </p>
                <p><button id="deadlinebutton" class="bi bi-calendar3"></button> Deadline <span>${task.deadline}</span></p>
              </div>
              <hr>
              <div class="text-end">
                <button class="remove btn bg-danger"><i class="bi bi-trash"> </i>Delete</button>
                <button class="done btn bg-success"><i class="bi bi-check-square"> </i>Done</button>
              </div>
            </div>
          </div>
    `
}

/* Increase Importance */
function importanceincrease(i){
    if(tasks[i].importance <5){
    tasks[i].importance++;
    }
    else{}
    document.getElementsByClassName("importance")[i].innerHTML = tasks[i].importance;
    var number = document.getElementsByClassName("importance")
    if(tasks[i].importance > 3){/* Change Color based on i */
        number[i].classList.add("bg-danger")
        number[i].classList.remove("bg-warning")
        number[i].classList.remove("bg-success")
    }
    else if(tasks[i].importance > 1){
        number[i].classList.add("bg-warning")
        number[i].classList.remove("bg-danger")
        number[i].classList.remove("bg-success")
    }
    else{
        number[i].classList.add("bg-success")
        number[i].classList.remove("bg-danger")
        number[i].classList.remove("bg-warning")
    }
}

var increasebutton = document.getElementsByClassName("importanceincrease");

for(let i=0; i<increasebutton.length; i++){
    increasebutton[i].addEventListener("click", function(){
        importanceincrease(i);
    })
}

/* Decrease Importance */
function importancedecrease(i){
    if(tasks[i].importance > 0 ){
    tasks[i].importance--;
    }
    else{}
    document.getElementsByClassName("importance")[i].innerHTML = tasks[i].importance;
    var number = document.getElementsByClassName("importance")
    if(tasks[i].importance > 3){/* Change Color based on i */
        number[i].classList.add("bg-danger")
        number[i].classList.remove("bg-warning")
        number[i].classList.remove("bg-success")
    }
    else if(tasks[i].importance > 1){
        number[i].classList.add("bg-warning")
        number[i].classList.remove("bg-danger")
        number[i].classList.remove("bg-success")
    }
    else{
        number[i].classList.add("bg-success")
        number[i].classList.remove("bg-danger")
        number[i].classList.remove("bg-warning")
    }
}

var decreasebutton = document.getElementsByClassName("importancedecrease");

for(let i=0; i<increasebutton.length; i++){
    decreasebutton[i].addEventListener("click", function(){
        importancedecrease(i);
    })
}

/* Task Done */

var done = document.getElementsByClassName("done");

for(let i=0; i<done.length; i++){
    done[i].addEventListener("click", function(){
        taskdone(i);
    })
}

function taskdone(i){
    document.getElementsByClassName("card")[i].classList.add("border","border-success", "border-2");
}

/* remove this one */

var removeItem = document.getElementsByClassName("remove");

for(let i=0; i<done.length; i++){
    removeItem[i].addEventListener("click", function(){
        removeThisItem(i);
    })
}

function removeThisItem(i){
    document.getElementsByClassName("card")[i].remove();
}