import {ProjectFactory} from "./item.js";

function addList(){

    let ti = document.getElementById("titleForm");
    let de = document.getElementById("descriptionForm");
    let du = document.getElementById("dueDateForm");
    let pri = document.getElementById("priorityForm");
    let no = document.getElementById("notesForm");
    let intoList = document.getElementById("list");

    let tempTitle = ti.value;
    let tempDescription = de.value;
    let tempDueDate = du.value;
    let tempPriority = pri.value;
    let tempNotes = no.value;

    let task = ProjectFactory(tempTitle, tempDescription, tempDueDate, tempPriority, tempNotes);
    
    function createDiv(){
        function deleteThis(){
            listRow.remove();
        }
        let listRow = document.createElement('div');
        let delBtn = document.createElement('button');
        listRow.innerHTML = task.fullString;
        intoList.appendChild(listRow)
        delBtn.innerHTML = "delete";
        delBtn.addEventListener('click', deleteThis)
        listRow.appendChild(delBtn);
        

    }
    createDiv();
    console.log(task.fullString);
}

export {addList}