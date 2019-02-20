<?php
    if (isset($_POST['name']) && isset($_POST['mdp']) && isset($_POST['courriel'])) {

        $pseudo = $_POST['name'];
        $mdp = $_POST['mdp'];
        $courriel = $_POST['courriel'];

        $to = 'alexandre.mondt@yahoo.com';
        $subject = 'test form | email send';
        $body = 'bla bla bla';

        $headers  = 'Form: '.$name.' <'.$courriel.'>\r\n';
        $headers .= 'Reply-To: '.$courriel.'\r\n';
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
    </head>
    <body>
        <h1>Contact Us</h1>
        <p>You want to book ? You got a question ? We'd love to hear from you. Send us a message ans we'll respond as soon as possible.</p>
        <form method='POST'>
            <p>
                <label for="name">Name*</label>
                <input type="text" name="name" id="name" required>
                <span id="aideName"></span>
            </p>
            <p>
                <label for="courriel">Email*</label>
                <input type="email" name="courriel" id="courriel" required placeholder="example@domain.com">
                <span id="aideCourriel"></span>
            </p>
            <p>
                <label for="mdp">Message</label>
                <input type="password" name="mdp" id="mdp" required>
                <span id="aideMdp"></span>
            </p>
            <p>
                <input type="submit" value="Send Message">
            </p>

            <script>
                window.onload = () => {
                    // Name
                    var nameElt = document.querySelector('#name')
                    nameElt.addEventListener('mouseover', function(e) {
                        document.querySelector('#aideName').textContent = 'Enter your name'
                    })
                    nameElt.addEventListener('mouseout', function(e) {
                        document.querySelector('#aideName').textContent = ''
                    })

                    // Courriel
                    document.querySelector('#courriel').addEventListener('blur', function(e) {
                    var regexCourriel = /.+@.+\..+/
                    var validiteCourriel = ''
                    if (!regexCourriel.test(e.target.value) && (e.target.value != '')) {
                        validiteCourriel = 'invalid address'
                    }
                    document.querySelector('#aideCourriel').textContent = validiteCourriel
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
                }
            </script>
        </form>
    </body>
</html>