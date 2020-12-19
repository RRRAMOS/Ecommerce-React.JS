<?php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "bdartesanato";

$con = mysqli_connect($host, $user, $pass, $dbname);

if ($con) {
        
    return true;

} else {

    die ("erro ao conectar ao banco de dados" .mysqli_errno($con));
}
$con->query("SET NAMES utf8");
?>

