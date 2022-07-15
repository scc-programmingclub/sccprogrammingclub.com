<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";

$recipient = "ted.miller92@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";

mail($recipient, $subject, $formcontent, $mailheader) or die("Error");
echo "Thank You!";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Seattle Central Programming Club</title>
    <link rel="stylesheet" href="../css/foundation.css">
    <link rel="stylesheet" href="../css/navigation.css">
    <script src="../javascript/header.js" type="text/javascript" defer></script>
    <script src="../javascript/aside.js" type="text/javascript" defer></script>
    <script src="../javascript/footer.js" type="text/javascript" defer></script>
</head>
<body>

<header-component></header-component>

<aside-component></aside-component>

<main>
    <div id="page-body">
        <!-- CHANGE FROM HERE -->
        <div id="inner-page-body" style="align-content: center">
        <form action="contact.php" method="POST">
            <p>Name</p> <input type="text" name="name">
            <p>Email</p> <input type="text" name="email">
            <p>Message</p><textarea name="message" rows="6" cols="25"></textarea><br />
            <input type="submit" value="Send"><input type="reset" value="Clear">
        </form>


        </div>
        <!-- TO HERE -->
    </div>
</main>

<footer-component></footer-component>

</body>
</html>