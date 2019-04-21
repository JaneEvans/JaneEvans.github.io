<?php
if($_GET){
    $contactName = $_GET["#contactForm #contactName"];
    $contactEmail = $_GET"#contactForm #contactEmail"];
    $contactSubject = $_GET["#contactForm #contactSubject"];
    $contactMessage = $_GET["#contactForm #contactMessage"];

    
//send email
    mail("janeevans.gejj@gmail.com", $contactSubject."This is an email from ".$contactName , $contactMessage, "From:".$contactEmail);
}

?>

