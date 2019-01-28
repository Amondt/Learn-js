function resteDiv (a, b) {
    alert("Le reste de leur division vaut " + (a%b));
}
function calculResult (pointure, naissance) {
    pointure *= 2;
    pointure += 5;
    pointure *= 50;
    pointure -= naissance;
    pointure += 1766;

    return pointure;
}
function resteDivision(e){
    var form = document.querySelector('#decimal-form');
    console.log(form, e.target, e);
    var nbre1 = Math.floor(form.premier_nombre.value);
    var nbre2 = Math.floor(form.deuxieme_nombre.value);
    alert((nbre1 % nbre2));
}