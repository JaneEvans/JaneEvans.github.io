<?php
if($_POST){
    $contactName = $_POST["#contactForm #contactName"];
    $contactEmail = $_POST"#contactForm #contactEmail"];
    $contactSubject = $_POST["#contactForm #contactSubject"];
    $contactMessage = $_POST["#contactForm #contactMessage"];

    
//send email
    mail("janeevans.gejj@gmail.com", $contactSubject."This is an email from ".$contactName , $contactMessage, "From:".$contactEmail);
}

?>

