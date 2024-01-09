<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];


    $destinatario = "gonzalez-braian@hotmail.com";
    $asunto = "Nuevo mensaje de contacto";

    $cuerpoMensaje = "Nombre: $nombre\n";
    $cuerpoMensaje .= "Email: $email\n";
    $cuerpoMensaje .= "Mensaje:\n$mensaje";

    mail($destinatario, $asunto, $cuerpoMensaje);

    echo "¡El mensaje se ha enviado con éxito!";
} else {
    header("Location: index.html");
    exit();
}

?>