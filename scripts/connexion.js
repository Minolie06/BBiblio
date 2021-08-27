var typeAccount = document.getElementById("account_type");
var btnCo = document.getElementById("btn_co");

function connexion() {
    // requete vers base de données pour vérifier mot de passe et email
    //redirection vers la page associée à la session selon le type de compte
    switch (typeAccount.value) {
        case "author":
            window.location.href="auteur.html";
            break;
        case "jury":
            window.location.href="jury.html";
            break;
        case "admin":
            window.location.href="admin.html";
            break;
    }
}

btnCo.addEventListener("click", connexion, false);