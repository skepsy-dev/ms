<?php
    if (!empty($_POST["send"])) {
        $userName = $_POST["userName"];
        $userEmail = $_POST["userEmail"];
        $regarding = $_POST["regarding"];
        $userMessage = $_POST["userMessage"];
        $toEmail = "schepisidev@gmail.com";

        $mailHeaders = "Name: " . $userName .
            "\r\n Email: " . $userEmail  .
            "\r\n Regarding: " . $regarding  .
            "\r\n Message: " . $userMessage . "\r\n";

            
        if (mail($toEmail, $userName, $mailHeaders)) {
            $message = "Your contact received successfully.";
        }
    }
?>