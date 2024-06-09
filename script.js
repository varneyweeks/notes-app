const notescontainer = document.querySelector(".notes-con");
const createbtn = document.querySelector(".btn");
const notes = document.querySelector(".input-box");

// function shownotes(){
//     notescontainer.innerHTML = localStorage.getItem("notes")
// }
// shownotes();



function updateStorage(){
    localStorage.setItem("notes", notescontainer.innerHTML)
}


createbtn.addEventListener("click", ()=>{
    let inputBox= document.createElement("p");
    let img = document.createElement("img");
    inputBox.className= "inputbox";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notescontainer.appendChild(inputBox).appendChild(img);
})

notescontainer.addEventListener("click", function(e){
    if (e.target.tagName ==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    } 
    else if(e.target.tagName=="p"){
        notes = document.querySelector(".input-box");
        notes.forEach( nt => {
            nt.onkeyup = function(){
                updateStorage()
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if (event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})