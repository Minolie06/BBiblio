var noteInput = document.getElementsByTagName("select");
var noteDisplay = document.getElementsByClassName("note");

var btnSubmitNotes = document.getElementById("submit_notes");

var boxInput = document.getElementById("notes_box_input");
var boxRecap = document.getElementById("notes_box_recap");

function submitNotes() {
    //Ecriture database : soumission formulaire

    let note;
    let global = 0;
    for (let i=0; i<noteInput.length; i++) {
        note = parseInt(noteInput[i].value);
        noteDisplay[i].textContent = note;
        global += note;
    }
    global = Math.round(global*2.5)/10;
    noteDisplay[4].textContent = global;

    boxInput.classList.add("hidden");
    boxRecap.classList.remove("hidden");
}

btnSubmitNotes.addEventListener("click", submitNotes, false);