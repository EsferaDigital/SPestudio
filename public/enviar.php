<?php
// capturamos elementos por su name
$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$mensaje = $_POST["mensaje"];

// Destinatario
$destinatario = "contacto@xn--spestudiodiseo-2nb.cl";
$asunto = "Desde la web";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Mensaje: $mensaje";

// Enviando mensaje
mail($destinatario, $asunto, $carta);
header("Location: contacto.html");
