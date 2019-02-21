<?php
    if (isset($_POST['name']) && isset($_POST['courriel']) && isset($_POST['message'])) {

        $pseudo = $_POST['name'];
        $courriel = $_POST['courriel'];
        $message = $_POST['message'];

        $to = 'alexandre.mondt@yahoo.com';
        $subject = 'test form | email send';
        $body = '$message;';
        echo '<script>console.log(typeof '.json_encode($message).')</script>';

        // $headers  = 'Form: '.$name.' <'.$courriel.'>\r\n';
        // $headers .= 'Reply-To: '.$courriel.'\r\n';
        // $headers .= 'MIME-Version: 1.0\r\n';
        // $headers .= 'Content-type: text/html; charset=utf-8';

        $send = mail($to, $subject, $body);

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
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
        <style>
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }
            body {
                font-family: 'Montserrat', sans-serif;
                font-weight: 400;
            }
            main {
                width: 600px;
                margin: 20px auto;
                padding: 40px;
                text-align: center;
                border: 1px solid #222;
                border-radius: 3px;
                background: #C2B280;
            }
            h2 {
                margin: 10x;
            }
            p {
                margin: 10px;
            }
            label {
                display: block;
                text-align: left;
            }
            input {
                width: 498px;
                height: 5vh;
            }
            textarea {
                width: 498px;
            }
            #aideCourriel {
                position: absolute;
            }
        </style>
    </head>
    <body>
        <main>
            <h2>Contact Us</h2>
            <p>You want to book ? You got a question ? We'd love to hear from you. Send us a message ans we'll respond as soon as possible.</p>
            <form action='' method='POST'>
                <p>
                    <label for="name">Name*</label>
                    <input type="text" name="name" id="name" required>
                </p>
                <p>
                    <label for="courriel">Email*</label>
                    <input type="email" name="courriel" id="courriel" required placeholder="example@domain.com">
                    <span id="aideCourriel"></span>
                </p>
                <p>
                    <label for="message">Message</label>
                    <textarea rows="10" cols="50" name="message" id="message"></textarea>
                </p>
                <p>
                    <input type="submit" value="Send Message">
                </p>
            </form>
        </main>


            <script>
                window.onload = () => {

                    // Courriel
                    document.querySelector('#courriel').addEventListener('blur', function(e) {
                    var regexCourriel = /.+@.+\..+/
                    var validiteCourriel = ''
                    if (!regexCourriel.test(e.target.value) && (e.target.value != '')) {
                        validiteCourriel = 'invalid address'
                    }
                    document.querySelector('#aideCourriel').textContent = validiteCourriel
                    })
                }
            </script>
        </form>
    </body>
</html>