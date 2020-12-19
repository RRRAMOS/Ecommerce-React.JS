<?php
header("Access-Control-Allow-Origin:*");
header("Content-type:application/json");

require_once('Conn.php');


//$select = 'select * from produto';

//$select = 'SELECT * FROM pedidos';

$select =  'select * from produto';


$result = $con->query($select);
$produtos = [];


while ($row = mysqli_fetch_assoc($result)) {
    $produtos[] = $row;
}

echo json_encode($produtos);
?>






