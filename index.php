<?php
    if (isset($_POST['name']) && isset($_POST['courriel']) && isset($_POST['message'])) {

        $name = $_POST['name'];
        $courriel = $_POST['courriel'];
        $message = $_POST['message'];

        $to = 'alexandre.mondt@yahoo.com';
        $subject = 'test form | email send';
        $body = $message;

        $headers  = 'Form: '.$name.' <'.$courriel.'>\r\n';
        $headers .= 'Reply-To: '.$courriel.'\r\n';
        $headers .= 'MIME-Version: 1.0\r\n';
        $headers .= 'Content-type: text/html; charset=utf-8';

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
                background: #FFFAED;
            }
            main {
                width: 600px;
                margin: 20px auto;
                padding: 40px;
                border-radius: 2px;
                border: 1px solid #7F7C76;
                background: #FFFAED;
                box-shadow: 1px 1px 3px 0 #7F7C76, -1px -1px 3px 0 #7F7C76;
            }
            main > p {
                text-align: center;
            }
            h2 {
                margin: 10px;
                font-weight: 400;
                font-size: 2.5em;
                margin-bottom: 50px;
                text-align: center;
            }
            p {
                margin: 10px;
            }
            label {
                display: inline-block;
                position: relative;
                text-align: left;
                margin: 5px 0;
            }
            input {
                width: 498px;
                height: 5vh;
                font-size: 1em;
                padding: 10px;
                font-weight: 400;
                font-family: 'Montserrat', sans-serif;
                margin-bottom: 5px;
                border-radius: 2px;
                border: 1px solid #7F7C76;
                box-shadow: 1px 1px 3px 0 #7F7C76, -1px -1px 3px 0 #7F7C76;
            }
            textarea {
                width: 498px;
                resize: vertical;
                max-height: 250px;
                border-radius: 2px;
                border: 1px solid #7F7C76;
                box-shadow: 1px 1px 3px 0 #7F7C76, -1px -1px 3px 0 #7F7C76;
                margin-bottom: 15px;
            }
            #aideCourriel {
                display: inline-block;
                position: relative;
                float: right;
                top: 8px;
                right: 2px;
            }
            #btn {
                background: #B3A189;
                color: #FFFAED;
                font-size: 1.4em;
            }
            #btn:hover {
                background: #39261A;
            }
        </style>
    </head>
    <body>
        <main>
            <h2>Contact Us</h2>
            <p>You want to book ? You got a question ? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            <form action='' method='POST'>
                <p>
                    <label for="name">Name*</label>
                    <input type="text" name="name" id="name" required>
                </p>
                <p>
                    <label for="courriel">Email*</label>
                    <span id="aideCourriel"></span>
                    <input type="email" name="courriel" id="courriel" required placeholder="example@domain.com">
                </p>
                <p>
                    <label for="message">Message</label>
                    <textarea rows="6" cols="50" name="message" id="message"></textarea>
                </p>
                <p>
                    <input type="submit" id='btn'value="Send Message">
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