/* Global */
var btn_data = document.querySelector(".btn_data");
var error = document.querySelector(".error");
var elem = document.querySelector('.masonry_root');
var msnry = new Masonry( elem, {
    itemSelector: '.element_msnry',
    columnWidth: 30
});

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

        deleteBlock(none_btn, element_msnry);
    }
    doneTask(input);
    changeColor(buttonColor, element_msnry);
}

function deleteBlock(btn_i, parent_elem){
    btn_i.addEventListener("click", function(){
        parent_elem.remove();
    });
}

msnry.on( 'removeComplete', function( removedItems ) {
    console.log( 'Masonry remove complete with ' + removedItems.length + ' items' );
});

function doneTask(input){
    // input onclick text line
}

function changeColor(button, parent_elem){
    parent_elem.style.background = "#D0E4F5";
    button.addEventListener("click", function(){
        if( parent_elem.style.background == "rgb(208, 228, 245)"){
            parent_elem.style.background = "#7f0055";
        }
        else if(parent_elem.style.background == "rgb(127, 0, 85)"){
            parent_elem.style.background = "green";
        }
        else if(parent_elem.style.background == "green"){
            parent_elem.style.background = "#D0E4F5";
        }
    });
}























/* text line-throw and with reload save data  */