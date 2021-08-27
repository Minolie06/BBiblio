btnOubli = document.getElementById("btn_oubli");
formOubli = document.getElementById("form_oubli");
messageOubli = document.getElementById("message_oubli");

function sendPass() {
    //requete database -> accès à l'entrée account correspondant à l'adress mail
    //dans l'input #oubli_email et envoi d'un email permettant d'accéder à un formulaire pour
    //changer de mot de passe.
    formOubli.classList.add("hidden");
    messageOubli.classList.remove("hidden");
}

btnOubli.addEventListener("click", sendPass);