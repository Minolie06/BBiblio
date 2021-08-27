var noteInput = document.getElementsByTagName("select");
var noteDisplay = document.getElementsByClassName("note");

var btnSubmitNotes = document.getElementById("submit_notes");

var boxInput = document.getElementById("notes_box_input");
var boxRecap = document.getElementById("notes_box_recap");

function submitNotes() {
    //Ecriture database : soumission formulaire

    let note;
    let global = 0;
    for (let i=0; i<(noteInput.length)-1; i++) {
        note = parseInt(noteInput[i].value);
        noteDisplay[i].textContent = note;
        global += note;
        console.log(global);
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
    document.getElementById("validate_book").classList.add("hidden");
});

document.getElementById("valid_no").addEventListener("click", function() {
    //ecriture database : supprime l'entrée et la page associée
    alert("Fiche oeuvre rejetée");
    document.getElementById("validate_book").classList.add("hidden");
});


//DISPLAY BOX : pour simuler l'affichage selon le type de compte en session
var displayChoice = document.getElementById("display_choice");

function chooseDisplay() {
    let authorDisplay = Array.from(document.getElementsByClassName("author_display"));
    let juryDisplay = Array.from(document.getElementsByClassName("jury_display"));
    let adminDisplay = Array.from(document.getElementsByClassName("admin_display"));
    switch (displayChoice.value) {
        case "public":
            authorDisplay.forEach(elem => elem.classList.add("hidden"));
            juryDisplay.forEach(elem => elem.classList.add("hidden"));
            adminDisplay.forEach(elem => elem.classList.add("hidden"));
            break;
        case "author":
            authorDisplay.forEach(elem => elem.classList.remove("hidden"));
            juryDisplay.forEach(elem => elem.classList.add("hidden"));
            adminDisplay.forEach(elem => elem.classList.add("hidden"));
            break;
        case "jury":
            authorDisplay.forEach(elem => elem.classList.add("hidden"));
            juryDisplay.forEach(elem => elem.classList.remove("hidden"));
            adminDisplay.forEach(elem => elem.classList.add("hidden"));
            boxRecap.classList.add("hidden");
            break;
        case "admin":
            authorDisplay.forEach(elem => elem.classList.add("hidden"));
            juryDisplay.forEach(elem => elem.classList.add("hidden"));
            adminDisplay.forEach(elem => elem.classList.remove("hidden"));
            break;
    }
}

displayChoice.addEventListener("change", chooseDisplay);
window.onload = chooseDisplay();
