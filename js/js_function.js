function formSubmit(e){
    e.preventDefault();
    var nom = e.target.nom.value;
    var prenom = e.target.prenom.value;
    var ville = e.target.ville.value;
    alert("Nom : " + nom + "\nPrénom : " + prenom + "\nVille : " + ville);
    console.log(nom + prenom + ville);
}
function changeColor(e){
    e.preventDefault();
    var button = document.querySelector(".button");
    console.log(button.classList);
    button.classList.toggle("green");
    button.classList.toggle('red');
    console.log(button.classList);
}
function toggleOnOff(e){
    e.preventDefault();
    var button = document.querySelector("#interrupt");
    console.log(button.classList);
    console.log(button.classList[0]);
    console.log(button);
    if (button.classList[0] == 'on') {
        button.innerHTML = "Off";
        document.querySelector("#color").removeEventListener("click", changeColor);
        button.classList.toggle("on");
        button.classList.toggle("off");
        console.log(button.innerHTML, button.classList[0]);
    }
    else if (button.classList[0] == 'off') {
        button.innerHTML = "On";
        document.querySelector("#color").addEventListener("click", changeColor);
        button.classList.toggle("on");
        button.classList.toggle("off");
        console.log(button.innerHTML, button.classList[0]);
    }
}
function multiplication(e){
    e.preventDefault();
    var form = document.querySelector('#decimal-form');
    console.log(form, e.target, e);
    var nbre1 = Math.floor(form.premier_nombre.value);
    var nbre2 = Math.floor(form.deuxieme_nombre.value);
    alert((nbre1 * nbre2));
}
function resteDiv (a, b) {
    alert("Le reste de leur division vaut " + (a%b));
}
function calculResult(e){
    e.preventDefault();
    // var form = document.querySelector('#pointure');
    var pointure = e.target.pointure.value;
    var naissance = e.target.annee.value;
    console.log(e.target.pointure.value);
    pointure *= 2;
    pointure += 5;
    pointure *= 50;
    pointure -= naissance;
    pointure += 1766;
    alert("voir console.log");
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
function surfaceRectangle(e){
    e.preventDefault();
    var largeur = prompt('largeur');
    var hauteur = prompt('hauteur');
    alert('La surface de ce rectangle vaut : ' + (hauteur*largeur));
}
function periRectangle(e){
    e.preventDefault();
    var largeur = prompt('largeur');
    var hauteur = prompt('hauteur');
    alert('Le périmètre de ce rectangle vaut : ' + (2*hauteur + 2*largeur));
}
function periCircle(e){
    e.preventDefault();
    var rayon = prompt('Rayon');
    alert('La surface de ce cercle vaut : ' + (Math.PI * Math.pow(rayon, 2)).toFixed(2));
}
function triple(x){
    return 3*x;
}
function affiche(e){
    e.preventDefault();
    alert(triple(a));
    alert(triple(b));
}
function afficheAdd(e){
    e.preventDefault();
    alert(additione(tab[0]));
    alert(additione(tab[tab.length - 1]));
}
function additione(x){
    return x+2;
}
function afficheSous(e){
    e.preventDefault();
    alert(soustrait(tab[0]));
    alert(soustrait(tab[tab.length - 1]));
}
function soustrait(x){
    if (x >= 0){
        return x-2;
    } else {
        return "Nombre négatif!";
    }
}
function faireChoix(e){
    var choix = prompt('Choisis entre 1, 2 ou 3');
    console.log(choix);
    if (choix == 1){
        alert('1. Merci');
    } else if (choix == 2){
        alert('2. Bonjour');
    } else if (choix == 3){
        alert('3. Au revoir');
    } else {
        alert('Pardon, que veux-tu?');
    }
}
function jourDeLaSemaine(e){
    var date = new Date();
    var jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    alert('Nous sommes ' + jours[date.getDay()]);
}
function testWhile(e){
    var char = '';
    while (char != 'p'){
        var chaine = prompt('Entre une chaîne de caractères qui contient la lettre \'p\'');
        for (const lettre of chaine){
            if (lettre == 'p'){
                char = 'p';
            }
        }
    }
    alert('Vous avez écrit :\n' + chaine);
}
function somme(e){
    var total = 0;
    for (i=0; i<3; i++) {
        var nombre = prompt('Entre un nombre');
        console.log(typeof nombre);
        total += parseInt(nombre);
    }
    alert('Le total des 3 nombres égal : ' + total);
}
function calculMoyenne(e) {
    e.preventDefault();
    var numbers = [];
    var entry = 0;
    while (!isNaN(entry)) {
        entry = parseInt(prompt('Entre un nombre entier'));
        if (entry >= 0) {
            numbers.push(entry);
        } else if (entry < 0) {
            var moyenne = 0;
            for (var i in numbers) {
                console.log('\n', typeof i, i, numbers);
                moyenne += numbers[i];
            }
            moyenne /= numbers.length;
            alert('La moyenne du tableau vaut : ' + moyenne + '\nIl y a eu ' + numbers.length + ' valeurs.');
            entry = NaN;
        }
        console.log(typeof entry, entry, numbers);
    }
}
function conversionTemperature(e) {
    e.preventDefault();
    var menu = 1;
    while (menu != 0) {
        var menu = parseInt(prompt('0. Fin du programme\n1. De Celsius vers Fahrenheit\n2. De Celsius vers Kelvin\n3. De Fahrenheit vers Celsius\n4. De Fahrenheit vers Kelvin\n5. De Kelvin vers Celsius\n6. De Kelvin vers Fahrenheit'));
        console.log(menu);
        if (menu == 1) {
            var temp = parseInt(prompt('Quelle est la température (en degrés Celsius)?'));
            var convers = temp * 9/5 + 32;
            console.log(convers);
            alert('Ca vaut ' + convers + ' °F');
        } else if (menu == 2) {
            var temp = parseInt(prompt('Quelle est la température (en degrés Celsius)?'));
            var convers = temp + 273.15;
            console.log(convers);
            alert('Ca vaut ' + convers + ' K');
        } else if (menu == 3) {
            var temp = parseInt(prompt('Quelle est la température (en degrés Fahrenheit)?'));
            var convers = (temp - 32) / (9/5);
            console.log(convers);
            alert('Ca vaut ' + convers + ' °C');
        } else if (menu == 4) {
            var temp = parseInt(prompt('Quelle est la température (en degrés Fahrenheit)?'));
            var convers = ((temp - 32) * (5/9)) + 273.15;
            console.log(convers);
            alert('Ca vaut ' + convers + ' K');
        } else if (menu == 5) {
            var temp = parseInt(prompt('Quelle est la température (en degrés Kelvin)?'));
            var convers = temp - 273.15;
            console.log(convers);
            alert('Ca vaut ' + convers + ' °C');
        } else if (menu == 6) {
            var temp = parseInt(prompt('Quelle est la température (en degrés Kelvin)?'));
            var convers = (temp * 9/5) - 459.67;
            console.log(convers);
            alert('Ca vaut ' + convers + ' °F');
        }
    }
}
function calculIMC(e) {
    var poids = NaN;
    var taille = NaN;
    while (isNaN(poids)) {
        poids = parseFloat(prompt('Quel est votre poids?'));
        if (isNaN(poids)) {
            console.log('Ceci n\'est pas un poids valide');
        }
    }
    while (isNaN(taille)) {
        taille = parseFloat(prompt('Quel est votre taille?'));
        if (isNaN(taille)) {
            console.log('Ceci n\'est pas une taille valide');
        }
    }
    var imc = (poids / (Math.pow(taille, 2))).toFixed(2);
    console.log(typeof poids, poids, typeof taille, taille, imc);
    if (imc < 16.5) {
        alert('imc : ' + imc + ' | dénutrition ou famine');
    } else if ((16.5 <= imc) && (imc < 18.5)) {
        alert('imc : ' + imc + ' | maigreur');
    } else if (18.5 <= imc && imc < 25) {
        alert('imc : ' + imc + ' | corpulence normale');
    } else if (25 <= imc && imc < 30) {
        alert('imc : ' + imc + ' | surpoids');
    } else if (30 <= imc && imc < 35) {
        alert('imc : ' + imc + ' | obésité modérée');
    } else if (35 <= imc && imc < 40) {
        alert('imc : ' + imc + ' | obésité sévère');
    } else if (imc > 40) {
        alert('imc : ' + imc + ' | obésité morbide');
    }
}
function changeImg(e) {
    document.querySelector('#image1').src = '../img/image1_2.jpg';
}
function originImg(e) {
    document.querySelector('#image1').src = '../img/image1.jpg';
}
function nameFormSubmit(e) {
    e.preventDefault();
    alert('Merci de votre participation');
}
function nameFormSubmitShow(e) {
    e.preventDefault();
    alert(document.querySelector('#form').nom.value);
}
function eraseInput(e) {
    e.preventDefault();
    document.querySelector('#nom').value = '';
    document.querySelector('#prenom').value = '';
    document.querySelector('#ville').value = '';
}
function mouseoverImg(e) {
    e.preventDefault();
    console.log('on  ' + e.target.id + typeof e.target.id);
    e.target.src = `../img/${e.target.id}_2.jpg`;
}
function mouseoutImg(e) {
    console.log('out ' + e.target.id + e.target.src);
    e.target.src = `../img/${e.target.id}.jpg`;
}
function addBorder(e) {
    e.target.style.border = "3px solid red";
}
function removeBorder(e) {
    e.target.style.border = "";
}
function showText(e) {
    document.querySelector('#texte').style.visibility = "visible";
}
function hideText(e) {
    document.querySelector('#texte').style.visibility = "hidden";
}
function changeColorText(e) {
    console.log(e.target, e.target.className);
    var texte = document.querySelector('p');
    if (e.target.className.includes("green")) {
        console.log(e.target.className.includes("green"))
        texte.style.border = "5px solid green";
        texte.style.color = 'green';
    } else if (e.target.className.includes("red")) {
        console.log(e.target.className.includes("red"))
        texte.style.border = "5px solid red";
        texte.style.color = 'red';
    } else if (e.target.className.includes("blue")) {
        console.log(e.target.className.includes("blue"))
        texte.style.border = "5px solid blue";
        texte.style.color = 'blue';
    }
}
function matchPwd(e) {
    e.preventDefault(); 
    var input1 = document.querySelector('#motdepasse');
    var input2 = document.querySelector('#confirmation');
    console.log(input1.value, typeof input1.value);
    console.log(input2.value, typeof input2.value);
    if (input1.value == input2.value && input1.value != "") {
        input1.style.border = "2px solid green";
        input2.style.border = "2px solid green";
    } else if (input1.value != input2.value) {
        input1.style.border = "2px solid red";
        input2.style.border = "2px solid red";
    }
}