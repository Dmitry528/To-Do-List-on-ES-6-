window.addEventListener("load", function(){
    var btn_data = document.querySelector(".btn_data");
    getData(btn_data);
    checkLength();
});

function getData(btn_data){
    btn_data.addEventListener("click", function(){
        var str = document.querySelector(".formTask").value;
        var error = document.querySelector(".error");
        checkStr(str, error);
    });
}

function checkStr(str, error){
    if(str === ""){
        error.className = "error d-block";
    }
    else {
        error.className = "error d-none";


        var elem = document.querySelector('.masonry_root');
        
        /* Create Blocks */

        var root_child = document.createElement("div");
        root_child.className = "element_msnry";
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
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        content.appendChild(checkbox);
        content.innerHTML += str;
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
            columnWidth: 150
        });
        msnry.on('removeComplete', function (removedItems) {
            console.log('Masonry remove complete with ' + removedItems.length + ' items');
        })
        /* Masonry */
        taskNone(none_btn, root_child);
    }
}

function checkLength(){
    var strElem = document.querySelector(".formTask");
    strElem.addEventListener("keypress", function () {
        if (strElem.value.length > 19) {
            event.preventDefault();
        }
    })
}

function taskNone(btnNone, parent){
    btnNone.addEventListener("click", function(){
        parent.remove();
    })
}

/* Change color */
/* checkBox line throw */
/* Save data after reload */