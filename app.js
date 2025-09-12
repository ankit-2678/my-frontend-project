const input_box = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container")


function addTask() {
    if (input_box.value === '') {
        alert("you must write something !")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    savedata();
}
listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
})
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showdata(){
    listcontainer.innerHTML=localStorage.getItem("data")
}
showdata();
