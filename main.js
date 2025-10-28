// window on load

/*global
     window
     getComputedStyle
*/

var box = [];
var i = 0;
var color = [
    "left",
    "right"
];

function back() {
    "use strict";
    var abc = document.getElementById("data");
    abc.innerHTML = "Here is the data spot";
}
//  ajax get text
function load() {
    "use strict";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {

        console.log(xmlhttp.readyState);

        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            document.getElementById("data").innerHTML = xmlhttp.responseText;
        } else {
            document.getElementById("data").innerHTML = "waiting . . ";
        }
    };

    xmlhttp.open("GET", "./hello.txt", true);
    xmlhttp.send();
}

function makeDivs() {
    "use strict";
    var y = document.getElementById("footer");
    for (i = 0; i < color.length; i = i + 1) {
        if (i === 0) {
            box[i] = document.createElement("div");
            box[i].id = "container";
            document.body.insertBefore(box[i], y);
        } else {
            box[i] = document.createElement("div");
            box[i].id = i;
            box[i].style.display = "block";
            box[i].style.margin = "1%";
            box[0].appendChild(box[i]);
        }
    }
}
function makeBtn1() {
    "use strict";
    var btn = document.getElementById("1");
    var btn1 = document.createElement("button");
    btn1.name = "get text";
    btn1.type = "button";
    btn1.textContent = "get text from server";
    btn1.addEventListener("click", load, false);
    btn.appendChild(btn1);
}

function makeBtn2() {
    "use strict";
    var btn = document.getElementById("1");
    var btn2 = document.createElement("button");
    // var abc = document.getElementById("data");
    btn2.name = "return";
    btn2.type = "button";
    btn2.textContent = "return original";
    btn2.style.float = "right";

    btn2.addEventListener("click", back, false);
    btn.appendChild(btn2);
}


//  make the container divs
//  make the buttons
makeDivs();
makeBtn1();
makeBtn2();


