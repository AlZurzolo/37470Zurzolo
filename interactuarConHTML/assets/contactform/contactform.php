<?php 

    
$nombre = $_POST['nombre'];
$mail = $_POST['mail'];
$telefono = $_POST['telefono'];
$asunto = $_POST['asunto'];
$empresa = $_POST['mensaje'];

$header = 'from: '.$mail."\r\n";
$header .= "X-Mailer:PHP/".phpversion()."\r\n";
$header .= "Mime-Version:1.0 \r\n";
$header .= "content-Type:text/plain";

$message = "Este mensaje fue enviado por: ".$nombre."\r\n";
$message .= "Su e-mail es: ".$mail."\r\n";
$message .= "Telefono: ".$telefono."\r\n";
$message .= "Asunto: ".$asunto."\r\n";
$message .= "mensaje: ".$_POST['mensaje']."\r\n";
$message .= "Enviado el: ".date('d/m/Y',time());

$para = 'web@puntoalfa.ar';
$asunto = 'Mensaje web Punto ALFA';

if(mail($para,$asunto,utf8_decode($message),$header))
echo "<script type='text/javascript'>alert('Tu mensaje ha sido enviado exitosamente');</script>";
echo "<script type='text/javascript'>window.location.href='http://www.puntoalfa.ar';</script>";

 ?>