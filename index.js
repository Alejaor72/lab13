const taskInput = document.getElementById('taskInput');
const publishBtn = document.getElementById('publishBtn');
const todo = document.getElementById('todo');
const doing = document.getElementById('doing');
const done = document.getElementById('done');

const localDStorage  = window.localStorage;
//getItem , setItem
//los datos de la pagina
let tasks = [];
let count_identifier = 0;
//Cargar datos que estban antes
let loadedTasks = localStorage.getItem("tasks");
if(loadedTasks==null){
    tasks = [];
}else{
    tasks = JSON.parse(loadedTasks);
}



console.log;

function showTasks(){
    let html = "";
    for(let i=0;i<tasks.length; i++){
        //console.log(i)
        html += `<div id="task${tasks[i].id}"><p>${tasks[i].task}.</p>
                 <img data-id="${tasks[i].id}" class="closetasks" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEX///8AAABbW1teXl5YWFhPT09UVFRVVVXq6upOTk7BwcGRkZHu7u4dHR3e3t49PT2Xl5fIyMhkZGQKCgpPrCJfAAADp0lEQVR4nO2dCXqjMAyFQ7plsraZ+991SvncCcECA5Ijvbz/ADxsSZYMXjYbQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEkMdz3FUW3B1rqu23zTenQ61W7g6nVnC7r6R3vjSJzyqCn796l3MNva/mhmsFweut4Je93rnp8WouuO0L2lvx0hds3oz13u70LsZ6m31zj60VXwd61sPNdqDYbA3lXurKtQwVm+bDTG1owW/M1H445iTNYvE9q2ab+ndZTSPPybhoi3GdkRc1aaLQQGMv3ZwEWX1HvU8TiZO6Up+DoKs+3GQHmZaDstA9QiA22o4quah5GN6Wwfdopn7RgjWK/asorheLUgzWKfVzZY2yFe0VJsgn4hadWJRj0LrM/0Xu43eFp8sxWMmCLZa9bO0hhcj9vPY15M6zK/CzyD29zpUcxOD0q/xZ8VQnLtph4U52zr8I/f525KIdco8vs6KchCoPMv/RjUVXMZjQLK8eXqrl0et3dzGYkHt+3ot9+LRgi9z3c2pUuYEPjMGERg7T6SYz1juYlqubsTZpuEwTfeQmllhRtqCbBq6zgts00Wd5Aadd+pmxNBYDxGBiWTSti+DKLLFGkBhMzH9dq08hZsytTJzN6EuYV106L9XyzCngbD8rm1Eei4HSRJ/SmbrTGX0JZbYJlib6lMSXi58vy5m2T9gYTEzlOTc/X5YzXquEjsHEWCPCu2iH3ESZUA0cc1TZusGQh5s8rku1PPMcNZiLdsipf0iIRD+kPBbDxWCi1IpBLdhSFoshYzBRMqIGHEVvmY7FsDGYmHLU0C7aMd5EgAaOO2p4F+34K7fw0a+mA7wNx+MwcLJPwI+l8PkQvqaBr0vh5xbw80P4OT78dxr4b23w30vhv3nD/7cYb4TNbpuqwP8/hP8HDP8ff+1aDPexCL+eBn5NFPy6Nq21iW4LOPj1pfN3vgRbI6y7ztth0tBeq++ugFs6bIRJGvB7Zmz2PTmKRau9a25G1LWp230srs9qzveQwu8Dht/LrTVDcLsfH/5MBc2B3uVmS91+d5g0tL+YuZv1w58xBH9OlE1/O4pFq1dx46jwZ+5Z9rSLAg7+7Ev480vhz6CFP0e4zlnQshXNz4LGP88b/0z2eufqSyO29bn6gizO3Qj491vg31GCf8/ME9wVVPu+p2GPml8vB39n1xPcu4Z/d94T3H+4wb/D8gfwe0gJIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCBP4BAyMhUrpvY7EAAAAASUVORK5CYII=" alt="">
                 <button id="redtodo"></button>
                 <button id="bluetodo"></button></div>`;
        // html += `<p>${tasks[i].task}. Estado: ${tasks[i].state}</p>`;
    }
    todo.innerHTML = html;
}

showTasks();

function post(){
    let text = taskInput.value;
    let state = 0;
    let id;
    if(tasks.length == 0) {
        id = 1;
    } else {
        id = tasks[tasks.length - 1].id += 1;
    }
    let task = new Task(id, text, state);
    tasks.push (task);
    console.log(tasks);
    let json=JSON.stringify(tasks);
    localStorage.setItem("tasks", json);
    showTasks();
}

publishBtn.addEventListener('click', post);

const redtodo = document.getElementById('redtodo');
const bluetodo = document.getElementById('bluetodo');
//const closetasks = document.getElementById('closetasks');

$(document).on("click", ".closetasks", function() {
    loadedTasks = localStorage.getItem('tasks');
    tasks = JSON.parse(loadedTasks);

    let filtered_tasks = [];
    let id_to_delete = $(this).data("id");

    for(let i=0;i<tasks.length; i++) {
        if(tasks[i].id != id_to_delete) {
            filtered_tasks.push(tasks[i]);
        }
    }

    let json=JSON.stringify(filtered_tasks);
    localStorage.setItem("tasks", json);
    showTasks();
});










//closetasks.addEventListener('click',function(){})


//function eliminar(){
    
    
    
    //tasks.pop();
    //console.log(tasks);
    //let json=JSON.stringify(tasks);
    //localStorage.removeItem('tasks');
    //showTasks()
//}

//closetasks.addEventListener('click',eliminar);



//redtodo.addEventListener('click');
//bluetodo.addEventListener('click');
//0->to do   1->doing   2->done