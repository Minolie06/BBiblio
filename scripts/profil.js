var warningProfil = document.getElementById("warning_profil");
var btnProfil = document.getElementById("btn_profil");
var btnYes = document.getElementById("btn_profil_yes");
var btnNo = document.getElementById("btn_profil_no");
var fieldList = document.getElementsByTagName("fieldset")

function show_warning() {
    for (let i = 0; i < fieldList.length; i++) {
        fieldList[i].setAttribute("disabled", "disabled");
    }
    btnProfil.classList.add("hidden");
    btnYes.classList.remove("hidden");
    btnNo.classList.remove("hidden");
    warningProfil.classList.remove("hidden");
}

function warning(answer) {
    if (answer) {
        //soumission du formulaire à la BDD
        window.location.href="index.html";
    } else {
        for (let i = 0; i < fieldList.length; i++) {
            fieldList[i].removeAttribute("disabled");
        }
    }
    btnProfil.classList.remove("hidden");
    btnYes.classList.add("hidden");
    btnNo.classList.add("hidden");
    warningProfil.classList.add("hidden");
}

btnProfil.addEventListener("click", show_warning, false);
btnYes.addEventListener("click", function() {
    warning(true);
}, false);
btnNo.addEventListener("click", function() {
    warning(false);
}, false);
