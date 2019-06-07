window.addEventListener("load", function () {
    var btn_data = document.querySelector(".btn_data");
    getData(btn_data);
    checkLength();
    checkStorage()
});

function checkStorage(){
    if(localStorage.getItem("Task") === null){
        return;
    }
    else{
        var elem = document.querySelector('.masonry_root');

        /* Create Blocks */

        var root_child = document.createElement("div");
        root_child.className = "element_msnry";
        root_child.style.backgroundColor = "#d0e4f5";
        /* Dissapear */
        var dissapear = document.createElement("div");
        dissapear.className = "dissapear";
        var none_btn = document.createElement("i");
        none_btn.className = "fas fa-times";

        dissapear.appendChild(none_btn);
        /* Dissapear */
        /* Content */
        var content = document.createElement("div");
        content.className = "content";
        var p = document.createElement("p");
        p.innerHTML = localStorage.getItem("Task");
        content.appendChild(p);
        /* Content */
        /* Btn */
        var btn = document.createElement("div");
        btn.className = "btn_change";
        var buttonChange = document.createElement("button");
        buttonChange.innerHTML = "Change color";
        btn.appendChild(buttonChange);
        /* Btn */

        root_child.appendChild(dissapear);
        root_child.appendChild(content);
        root_child.appendChild(btn);
        elem.appendChild(root_child);
        /* Create Blocks */


        /* Masonry */
        elem.addEventListener("click", function () {
            msnry.layout();
        })
        var msnry = new Masonry(elem, {
            itemSelector: '.element_msnry',
            columnWidth: 140
        });
        msnry.on('removeComplete', function (removedItems) {
            console.log('Masonry remove complete with ' + removedItems.length + ' items');
            event.stopPropagation();
        })
        /* Masonry */
        taskNone(none_btn, root_child);
        changeColor(buttonChange, root_child);
        lineThrow(p);
    }
}

function getData(btn_data) {
    btn_data.addEventListener("click", function () {
        var str = document.querySelector(".formTask").value;
        var error = document.querySelector(".error");
        checkStr(str, error);
    });
}

function checkStr(str, error) {
    if (str === "") {
        error.className = "error d-block";
    }
    else {
        error.className = "error d-none";

        localStorage.setItem("Task", str);

        var elem = document.querySelector('.masonry_root');

        /* Create Blocks */

        var root_child = document.createElement("div");
        root_child.className = "element_msnry";
        root_child.style.backgroundColor = "#d0e4f5";
        /* Dissapear */
        var dissapear = document.createElement("div");
        dissapear.className = "dissapear";
        var none_btn = document.createElement("i");
        none_btn.className = "fas fa-times";

        dissapear.appendChild(none_btn);
        /* Dissapear */
        /* Content */
        var content = document.createElement("div");
        content.className = "content";
        var p = document.createElement("p");
        p.innerHTML = str;
        content.appendChild(p);
        /* Content */
        /* Btn */
        var btn = document.createElement("div");
        btn.className = "btn_change";
        var buttonChange = document.createElement("button");
        buttonChange.innerHTML = "Change color";
        btn.appendChild(buttonChange);
        /* Btn */

        root_child.appendChild(dissapear);
        root_child.appendChild(content);
        root_child.appendChild(btn);
        elem.appendChild(root_child);
        /* Create Blocks */


        /* Masonry */
        elem.addEventListener("click", function () {
            msnry.layout();
        })
        var msnry = new Masonry(elem, {
            itemSelector: '.element_msnry',
            columnWidth: 140
        });
        msnry.on('removeComplete', function (removedItems) {
            console.log('Masonry remove complete with ' + removedItems.length + ' items');
            event.stopPropagation();
        })
        /* Masonry */
        taskNone(none_btn, root_child);
        changeColor(buttonChange, root_child);
        lineThrow(p);
    }
}

function checkLength() {
    var strElem = document.querySelector(".formTask");
    strElem.addEventListener("keypress", function () {
        if (strElem.value.length > 19) {
            event.preventDefault();
        }
    })
}

function taskNone(btnNone, parent) {
    btnNone.addEventListener("click", function () {
        parent.remove();
        localStorage.removeItem("Task");
    })
}

function changeColor(button, parent) {
    button.addEventListener("click", function () {
        if (parent.style.backgroundColor === "rgb(208, 228, 245)") {
            parent.style.backgroundColor = "rgb(159, 0, 212)";
        }
        else if (parent.style.backgroundColor === "rgb(159, 0, 212)") {
            parent.style.backgroundColor = "rgb(212, 159, 0)";
        }
        else if (parent.style.backgroundColor === "rgb(212, 159, 0)") {
            parent.style.backgroundColor = "rgb(208, 228, 245)";
        }
    })
}
function lineThrow(p) {
    p.addEventListener("click", function () {
        if (p.style.textDecoration === "none") {
            p.style.textDecoration = "line-through";
        } else {
            p.style.textDecoration = "none";
        }
    })
}

/* CREATE STORAGE WITH 1 ELEM */