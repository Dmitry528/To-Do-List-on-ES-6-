window.addEventListener("load", function(){
    var btn_data = document.querySelector(".btn_data");
    getData(btn_data);
    checkLength();
});

function getData(btn_data){
    btn_data.addEventListener("click", function(){
        var str = document.querySelector(".formTask").value;
        var error = document.querySelector(".error");
        var elem = document.querySelector('.masonry_root');
        var msnry = new Masonry(elem, {
            itemSelector: '.element_msnry',
            columnWidth: 150
        });
        checkStr(str, error, elem, msnry);
    });
}

function checkStr(str, error, elem, msnry){
    if(str === ""){
        error.setAttribute("class", "d-block");
        error.setAttribute("class", "error");
    }
    else {
        error.setAttribute("class", "d-none");
        /* create block with logic */
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