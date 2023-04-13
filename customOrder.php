<?php
    if (!empty($_POST["send"])) {
        $customUserName = $_POST["customUserName"];
        $customUserEmail = $_POST["customUserEmail"];
        $customStitchColor = $_POST["customStitchColor"];
        $customPaintColor = $_POST["customPaintColor"];
        $customQuote = $_POST["customQuote"];
        $customShipName = $_POST["customShipName"];
        $customAddress = $_POST["customAddress"];
        $customNotes = $_POST["customNotes"];
        $toEmail = "schepisidev@gmail.com";

        $mailHeaders = "Name: " . $customUserName .
            "\r\n Email: " . $customUserEmail  .
            "\r\n Stitch Color: " . $customStitchColor  .
            "\r\n Paint Color(s): " . $customPaintColor  .
            "\r\n Quote: " . $customQuote  .
            "\r\n Ship to Name: " . $customShipName  .
            "\r\n Ship to Address: " . $customAddress  .
            "\r\n Message: " . $customNotes . "\r\n";

            
        if (mail($toEmail, $customUserName, $mailHeaders)) {
            $message = "Your contact received successfully.";
        }
    }
