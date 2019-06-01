/* Global */
var btn_data = document.querySelector(".btn_data");
var error = document.querySelector(".error");
var elem = document.querySelector('.masonry_root');

/* Start logic */
btn_data.addEventListener("click", getData);

function getData(){
    var str = document.querySelector(".formTask").value;
    createTask(str);
}

function createTask(str){
    if(str === ""){
        error.setAttribute("class", "d-block");
        error.setAttribute("class", "error");
    }
    else{
        error.setAttribute("class", "d-none");

        var element_msnry = document.createElement("div");
        element_msnry.setAttribute("class", "element_msnry");
        elem.appendChild(element_msnry);

        var innerElem = document.createElement("div");
        innerElem.setAttribute("class", "inner_elem");

        var none_btn = document.createElement("i");
        none_btn.setAttribute("class", "fas fa-times");

        var p = document.createElement("p");
        var input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        p.appendChild(input);
        p.innerHTML += str;

        innerElem.appendChild(none_btn);
        innerElem.appendChild(p);

        var buttonColor = document.createElement("button");
        buttonColor.setAttribute("class", "btn_task");
        buttonColor.innerHTML = "Change color";

        element_msnry.appendChild(innerElem);
        element_msnry.appendChild(buttonColor);

        var msnry = new Masonry( elem, {
            itemSelector: '.element_msnry',
            columnWidth: 30
        });
    }
}























/* button logic - color, different classes for tasks, how to incude
input ant others html in js, local storage on reload page content still
on page and others  */