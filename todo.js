/*var ulList = document.querySelector("ul");*/
var addBtn = document.querySelector(".img");
var todo = document.querySelector(".todo");
var main = document.querySelector(".main");
var inputValue = document.querySelector(".input");
var searchS = document.querySelector(".srch");
var srchBtn = document.querySelector(".img-srch");
var arrayLi = [];
var checking = false;




addBtn.addEventListener("click", function () {

    inputValue2 = inputValue.value.charAt(0).toUpperCase() + inputValue.value.slice(1).toLowerCase();
    inputValue1 = inputValue2.trim();
    /*compare the value that is present or not*/
    check();

    if (inputValue1) {
        /*pushing value in array*/
        pushing();
        inputValue.value = "";
    }
});



inputValue.addEventListener("keypress", function (e) {
    inputValue2 = inputValue.value.charAt(0).toUpperCase() + inputValue.value.slice(1).toLowerCase();
    inputValue1 = inputValue2.trim();
    /*compare the value that is present or not*/
    check();
    if (e.keyCode == 13 && inputValue1 != "") {
        /*pushing value in array*/
        pushing();
        inputValue.value = "";
    }

});


function addElement() {

    /*creating li element*/
    li = document.createElement('li');
    capital = inputValue1.charAt(0).toUpperCase() + inputValue1.slice(1).toLowerCase();
    console.log(inputValue1);
    li.innerText = capital;
    todo.appendChild(li);

    /*create Delete button element*/
    var btn = document.createElement('button');
    var img = document.createElement('img');
    img.src = "delete.png";
    li.appendChild(btn);
    btn.appendChild(img);

    /*adding css*/
    li.classList.add("list");
    todo.style.padding = "0px 0px 10px 0px";
    main.style.padding = "10px 0px 0px 0px";
    btn.classList.add("remove");
    img.classList.add("delImg");

    /*deleted the create Element*/
    btn.addEventListener("click", remove);

    /*li click on green*/
    li.addEventListener("click", function () {
        this.classList.toggle("toggle");
    });


}


/*seprate function*/
/*for delete Element*/
function remove() {
    var liDel = this.parentNode;
    todo.removeChild(liDel);
    arrayLi.splice(li.innerText, 1);

    if (todo.childNodes.length === 1) {
        todo.style.padding = "0px 0px 0px 0px";
        main.style.padding = "0px 0px 0px 0px";
    }
}


searchS.addEventListener("keyup", function () {
    var liv = document.querySelectorAll("li");
    var arr = [];
    for (var i = 0; i < liv.length; i++) {
        arr[i] = liv[i].innerText.toLowerCase();
        document.querySelectorAll("li")[i].style.display = "none";

    }
    console.log(arr);

    for (var i = 0; i < arr.length; i++) {
        var test = arr[i].indexOf(this.value.toLowerCase().trim());
        test = test + 1;
        if (test) {
            document.querySelectorAll("li")[i].style.display = "block";
            document.querySelectorAll("li")[i].style.display = "list-item";
            document.querySelectorAll("li")[i].classList.add("list");
            console.log(arr[i]);
        }
    }

});

function check() {
    for (var i = 0; i < arrayLi.length; i++) {
        if (inputValue1 === arrayLi[i]) {
            console.log("present");
            checking = true;
            document.querySelector(".warning").style.display = "block";
            inputValue.value = "";

        }
    }
}

function pushing() {
    if (checking) {
        document.querySelector(".wrnbtn").addEventListener("click", function () {
            document.querySelector(".warning").style.display = "none";
        });
        checking = false;

    } else {
        addElement();
        arrayLi.push(li.innerText);
        console.log(arrayLi);
    }
}
