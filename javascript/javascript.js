tasks = JSON.parse(tasks)
console.log(tasks)

function startup(){
for(let task of tasks){
    document.getElementById("content").innerHTML += `
    <div id="${task.taskName}" class="card text-center shadow">
            <img src="${task.image}" class="image card-img-top img-thumbnail" alt="taskimage">
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
}};
startup();


/* Increase Importance */
function importanceincrease(i){
    if(tasks[i].importance <5){
    tasks[i].importance++;
    }
    else{}
    document.getElementsByClassName("importance")[i].innerHTML = tasks[i].importance;
    var number = document.getElementsByClassName("importance")
    if(tasks[i].importance > 3){/* Change Color */
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

function addincreasebutton(){
for(let i=0; i<increasebutton.length; i++){
    increasebutton[i].addEventListener("click", function(){
        importanceincrease(i);
    })
}};
addincreasebutton();

/* Decrease Importance */
function importancedecrease(i){
    if(tasks[i].importance > 0 ){
    tasks[i].importance--;
    }
    else{}
    document.getElementsByClassName("importance")[i].innerHTML = tasks[i].importance;
    var number = document.getElementsByClassName("importance")
    if(tasks[i].importance > 3){
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

function adddecreasebutton(){
    for(let i=0; i<increasebutton.length; i++){
        decreasebutton[i].addEventListener("click", function(){
            importancedecrease(i);
        })
}};
adddecreasebutton(); 


/* Task Done */

var done = document.getElementsByClassName("done");

function adddonebutton(){
    for(let i=0; i<done.length; i++){
        done[i].addEventListener("click", function(){
            taskdone(tasks[i].taskName);
        })
    }
}
adddonebutton();


function taskdone(i){
    document.getElementById(i).classList.add("border","border-success", "border-2");
}

/* remove this one */

var removeItem = document.getElementsByClassName("remove");

function addremovebutton(){
    for(let i=0; i<removeItem.length; i++){
        removeItem[i].addEventListener("click", function(){
        removeThisItem(tasks[i].taskName);
    })
}};
addremovebutton();

function removeThisItem(i){
    document.getElementById(i).remove();
}

/* Sort Functionality */

var sortbtn = document.getElementById("sort");
sortbtn.addEventListener("click", function(){
    tasks.sort((a,b)=>a.importance - b.importance);
    document.getElementById("content").innerHTML = "";
    for(let task of tasks){
        document.getElementById("content").innerHTML += `
        <div id="${task.taskName}" class="card text-center shadow">
                <img src="${task.image}" class="image card-img-top img-thumbnail" alt="taskimage">
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
        addremovebutton();
        adddonebutton();
        adddecreasebutton();
        addincreasebutton();
    };
    colorCheck();
});

 /* color check */
function colorCheck(){
    var valueArray = document.getElementsByClassName("importance");
        for(let i = 0; i<valueArray.length; i++){
            var value = document.getElementsByClassName("importance")[i];
            console.log(value)
        if(Number(value.innerHTML) > 3){
            value.classList.add("bg-danger")
            value.classList.remove("bg-warning")
            value.classList.remove("bg-success")
        }
        else if(Number(value.innerHTML) > 1){
            value.classList.add("bg-warning")
            value.classList.remove("bg-danger")
            value.classList.remove("bg-success")
        }
        else{
            value.classList.add("bg-success")
            value.classList.remove("bg-danger")
            value.classList.remove("bg-warning")
        }
}};
