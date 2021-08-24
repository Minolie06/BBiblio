function connexion() {
    var btnCo = document.getElementById("btn_co");
    var typeAccount = document.getElementById("account_type");

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