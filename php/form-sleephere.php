<?php
    if (isset($_POST['pseudo']) && isset($_POST['mdp']) && isset($_POST['courriel'])) {

        $pseudo = $_POST['pseudo'];
        $mdp = $_POST['mdp'];
        $courriel = $_POST['courriel'];

        $to = 'alexandre.mondt@yahoo.com';
        $subject = 'test form | email send';
        $body = 'bla bla bla';

        mail($to, $subject, $body);

        echo('message sent !');
    }

?>