window.onload = () => {
    // Pseudo
    var pseudoElt = document.querySelector('#pseudo')
    document.querySelector('#pseudo').focus()
    // pseudoElt.value = 'pseudo'
    pseudoElt.addEventListener('focus', function(e) {
        document.querySelector('#aidePseudo').textContent = 'Entrez votre pseudo'
    })
    pseudoElt.addEventListener('blur', function(e) {
        document.querySelector('#aidePseudo').textContent = ''
    })

    // Mdp
    document.querySelector('#mdp').addEventListener('input', function(e) {
        var mdp = e.target.value; // Valeur saisie dans le champ mdp
        var longueurMdp = "faible";
        var couleurMsg = "red"; // Longueur faible => couleur rouge
        if (mdp.length >= 8) {
            longueurMdp = "suffisante";
            couleurMsg = "green"; // Longueur suffisante => couleur verte
        } else if (mdp.length >= 4) {
            longueurMdp = "moyenne";
            couleurMsg = "orange"; // Longueur moyenne => couleur orange
        }
        var aideMdpElt = document.querySelector("#aideMdp");
        aideMdpElt.textContent = "Longueur : " + longueurMdp; // Texte de l'aide
        aideMdpElt.style.color = couleurMsg; // Couleur du texte de l'aide
    })

    // Courriel
    document.querySelector('#courriel').addEventListener('blur', function(e) {
        var regexCourriel = /.+@.+\..+/
        var validiteCourriel = ''
        if (!regexCourriel.test(e.target.value)) {
            validiteCourriel = 'adresse invalide'
        }
        document.querySelector('#aideCourriel').textContent = validiteCourriel
    })

    // Confirmation
    document.querySelector('#confirmation').addEventListener('change', function(e) {
        console.log('demande de confirmation : ' + e.target.checked)
    })

    // Abonnement
    var aboElts = document.querySelectorAll('[name="abonnement"]')
    for (var i = 0; i < aboElts.length; i++) {
        aboElts[i].addEventListener('change', function(e) {
            console.log('Formule d\'abonnement choisie : ' + e.target.value)
        })
    }

    // Nationalité
    document.querySelector('#nationalite').addEventListener('change', function(e) {
        console.log('Code de nationalite : ' + e.target.value)
    })
    
    // Form submit
    var form = document.querySelector('form')
    form.addEventListener("submit", function (e) {
        var pseudo = form.elements.pseudo.value;
        var mdp = form.elements.mdp.value;
        var courriel = form.elements.courriel.value;
        console.log("Vous avez choisi le pseudo " + pseudo + ", le mot de passe " +
            mdp + " et le courriel " + courriel);
        if (form.elements.confirmation.checked) {
            console.log("Vous avez demandé une confirmation d'inscription par courriel");
        } else {
            console.log("Vous n'avez pas demandé de confirmation d'inscription par courriel");
        }
        switch (form.elements.abonnement.value) {
            case "abonewspromo":
                console.log("Vous êtes abonné(e) à la newsletter et aux promotions");
                break;
            case "abonews":
                console.log("Vous êtes abonné(e) à la newsletter");
                break;
            case "aborien":
                console.log("Vous n'êtes abonné(e) à rien");
                break;
            default:
                console.log("Erreur : code d'abonnement non reconnu");
        }
        switch (form.elements.nationalite.value) {
            case "FR":
                console.log("Vous êtes français(e)");
                break;
            case "BE":
                console.log("Vous êtes belge");
                break;
            case "SUI":
                console.log("Vous êtes suisse");
                break;
            default:
                console.log("Erreur : code de nationalité non reconnu");
        }
        e.preventDefault(); // Annulation de l'envoi des données
    })

}