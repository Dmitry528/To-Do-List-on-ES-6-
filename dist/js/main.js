function checkStorage(){if(null!==localStorage.getItem("Task")){var e=document.querySelector(".masonry_root"),n=document.createElement("div");n.className="element_msnry",n.style.backgroundColor="#d0e4f5";var t=document.createElement("div");t.className="dissapear";var o=document.createElement("i");o.className="fas fa-times",t.appendChild(o);var a=document.createElement("div");a.className="content";var r=document.createElement("p");r.innerHTML=localStorage.getItem("Task"),a.appendChild(r);var c=document.createElement("div");c.className="btn_change";var l=document.createElement("button");l.innerHTML="Change color",c.appendChild(l),n.appendChild(t),n.appendChild(a),n.appendChild(c),e.appendChild(n),e.addEventListener("click",function(){d.layout()});var d=new Masonry(e,{itemSelector:".element_msnry",columnWidth:140});d.on("removeComplete",function(e){console.log("Masonry remove complete with "+e.length+" items"),event.stopPropagation()}),taskNone(o,n),changeColor(l,n),lineThrow(r)}}function getData(e){e.addEventListener("click",function(){checkStr(document.querySelector(".formTask").value,document.querySelector(".error"))})}function checkStr(e,n){if(""===e)n.className="error d-block";else{n.className="error d-none",localStorage.setItem("Task",e);var t=document.querySelector(".masonry_root"),o=document.createElement("div");o.className="element_msnry",o.style.backgroundColor="#d0e4f5";var a=document.createElement("div");a.className="dissapear";var r=document.createElement("i");r.className="fas fa-times",a.appendChild(r);var c=document.createElement("div");c.className="content";var l=document.createElement("p");l.innerHTML=e,c.appendChild(l);var d=document.createElement("div");d.className="btn_change";var i=document.createElement("button");i.innerHTML="Change color",d.appendChild(i),o.appendChild(a),o.appendChild(c),o.appendChild(d),t.appendChild(o),t.addEventListener("click",function(){m.layout()});var m=new Masonry(t,{itemSelector:".element_msnry",columnWidth:140});m.on("removeComplete",function(e){console.log("Masonry remove complete with "+e.length+" items"),event.stopPropagation()}),taskNone(r,o),changeColor(i,o),lineThrow(l)}}function checkLength(){var e=document.querySelector(".formTask");e.addEventListener("keypress",function(){19<e.value.length&&event.preventDefault()})}function taskNone(e,n){e.addEventListener("click",function(){n.remove(),localStorage.removeItem("Task")})}function changeColor(e,n){e.addEventListener("click",function(){"rgb(208, 228, 245)"===n.style.backgroundColor?n.style.backgroundColor="rgb(159, 0, 212)":"rgb(159, 0, 212)"===n.style.backgroundColor?n.style.backgroundColor="rgb(212, 159, 0)":"rgb(212, 159, 0)"===n.style.backgroundColor&&(n.style.backgroundColor="rgb(208, 228, 245)")})}function lineThrow(e){e.addEventListener("click",function(){"none"===e.style.textDecoration?e.style.textDecoration="line-through":e.style.textDecoration="none"})}window.addEventListener("load",function(){getData(document.querySelector(".btn_data")),checkLength(),checkStorage()});
//# sourceMappingURL=main.js.map
