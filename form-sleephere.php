<?php
    if (isset($_POST['pseudo']) && isset($_POST['mdp']) && isset($_POST['courriel'])) {

        $pseudo = $_POST['pseudo'];
        $mdp = $_POST['mdp'];
        $courriel = $_POST['courriel'];

        $to = 'alexandre.mondt@yahoo.com';
        $subject = 'test form | email send';
        $body = 'bla bla bla';

        $headers  = 'Form: '.$pseudo.' <'.$email.'>\r\n';
        $headers .= 'Reply-To: '.$email.'\r\n';
        $headers .= 'MIME-Version: 1.0\r\n';
        $headers .= 'Content-type: text/html; charset=utf-8';

        $send = mail($to, $subject, $body, $headers);

        if ($send) {
            echo '</br>';
            echo 'Your message has been sent!';
        } else {
            echo 'error, try again';
        }
    }

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Sleephere booking</title>
        <link rel="stylesheet" href="./css/style.css">
        <script src="./js/form-sleephere.js"></script>
    </head>
    <body>
        <h1>Formulaire d'inscription</h1>
        <form action='' method='POST'>
            <p>
                <label for="pseudo">Pseudo</label> :
                <input type="text" name="pseudo" id="pseudo" required>
                <span id="aidePseudo"></span>
            </p>
            <p>
                <label for="mdp">Mot de passe</label> :
                <input type="password" name="mdp" id="mdp" required>
                <span id="aideMdp"></span>
            </p>
            <p>
                <label for="courriel">Courriel</label> :
                <input type="email" name="courriel" id="courriel" required placeholder="utilisateur@domaine.fr">
                <span id="aideCourriel"></span>
            </p>
            <p>
                <input type="submit" value="Envoyer">
                <input type="reset" value="Annuler">
            </p>

            <script>
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
                }
            </script>
        </form>
    </body>
</html>