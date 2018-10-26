<?php

$nombre = $_POST["nombre"];
$correo = $_POST["email"];
$mensaje = $_POST["mensaje"];

// Destinatario
$destinatario = "gabrielzavando@gmail.com";
$asunto = "Desde la web";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Mensaje: $mensaje";

// Enviando mensaje
mail($destinatario, $asunto, $carta);
header("Location: contacto.html");