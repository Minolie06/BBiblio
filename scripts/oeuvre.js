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

document.getElementById("valid_yes").addEventListener("click", function() {
    //ecriture database : valide la fiche de l'oeuvre (status validé) et rend la page public
    alert("Fiche oeuvre validée");
});

document.getElementById("valid_no").addEventListener("click", function() {
    //ecriture database : supprime l'entrée et la page associée
    alert("Fiche oeuvre rejetée");
});