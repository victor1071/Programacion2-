<?php
$conexion = new mysqli("localhost", "root", "", "codetofa");

if ($conexion->connect_error) {
    die("Error en la conexión: " . $conexion->connect_error);
}

$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];
$correo = $_POST['correo'];

$sql = "INSERT INTO usuarios (usuario, contrasena, correo) VALUES ('$usuario', '$contrasena', '$correo')";

if ($conexion->query($sql) === TRUE) {
    echo "Usuario registrado correctamente.";
} else {
    echo "Error al registrar usuario: " . $conexion->error;
}

$conexion->close();
?>