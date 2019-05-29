/* Masonry elem */

var btn_data = document.querySelector(".btn_data");

btn_data.addEventListener("click", getTask);

function getTask(){
    var taskString = document.querySelector(".formTask").value;
    appearNewTask(taskString);
}

function appearNewTask(taskString){
    var rootMasonry = document.querySelector('#masonry_root');

    var root_child = document.createElement("div");
    root_child.setAttribute("class", "element_msnry");
    root_child.innerHTML = "<p>" + taskString + "</p>";
    rootMasonry.append(root_child);
    
    var msnry = new Masonry(rootMasonry, {
        itemSelector: '.element_msnry',
        columnWidth: 50,
    });
}
/* button logic - color, different classes for tasks, how to incude
input ant others html in js, local storage on reload page content still
on page and others  */