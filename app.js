const info = document.querySelector('info')

const allBtns = document.querySelector('input[type=button]')

function val(resultat) {
    form.fenetre.value = form.fenetre.value + resultat
}

function calcule(){
    if(form.fenetre.value == ""){
        info.innerText = 'veuillez entrer un chiffre'
        allBtns.forEach(btn => {
            btn.addEventListener('click', function(){
                info.innerText= ""
            })
        });
    }else {
        form.fenetre.value = eval(form.fenetre.value)
    }
}

function suppr(){
    form.fenetre.value = "";
}

function moinsUn() {
    // Supprimer le dernier caractère de la valeur de form.fenetre
    if (form && form.fenetre && form.fenetre.value.length > 0) {
        form.fenetre.value = form.fenetre.value.slice(0, -1);
    }
}

function inverSign() {
    // Vérifier si form et form.fenetre existent
    if (form && form.fenetre && form.fenetre.value !== "") {
        // Convertir la valeur actuelle en nombre
        let nombre = parseFloat(form.fenetre.value);
        // Inverser le signe du nombre
        form.fenetre.value = -nombre;
    }
}

function rfunc() {
    // Vérifier si form et form.fenetre existent
    if (form && form.fenetre && form.fenetre.value !== "") {
        // Convertir la valeur actuelle en nombre
        let nombre = parseFloat(form.fenetre.value);
        // Calculer la racine carrée du nombre
        form.fenetre.value = Math.sqrt(nombre);
    }
}

function mrfunc() {
    // Afficher la valeur stockée en mémoire (si elle existe)
    if (memoire !== undefined && memoire !== null) {
        form.fenetre.value = memoire;
    }
}

function mcfunc() {
    // Effacer la mémoire
    memoire = null;
}

