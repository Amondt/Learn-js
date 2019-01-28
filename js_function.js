function resteDiv (a, b) {
    alert("Le reste de leur division vaut " + (a%b));
}
function calculResult (e) {
    e.preventDefault();
    var form = document.querySelector('#pointure');
    var pointure = e.target.pointure.value;
    var naissance = e.target.annee.value;
    console.log(e.target.pointure.value);
    pointure *= 2;
    pointure += 5;
    pointure *= 50;
    pointure -= naissance;
    pointure += 1766;
    console.log("le resultat est ", pointure);
    return pointure;
}
function resteDivision(e){
    var form = document.querySelector('#decimal-form');
    console.log(form, e.target, e);
    var nbre1 = Math.floor(form.premier_nombre.value);
    var nbre2 = Math.floor(form.deuxieme_nombre.value);
    alert((nbre1 % nbre2));
}
function testAge(e){
    e.preventDefault();
    var form = document.querySelector('#test-age');
    if (form.age.value >= 18){
        alert("Vous êtes majeur");
    }
    else if (form.age.value < 18){
        alert("Vous êtes mineur");
    }
}