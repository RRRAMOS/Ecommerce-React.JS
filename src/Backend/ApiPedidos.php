<?php 
header("Access-Control-Allow-Origin:*");
header("Content-type:application/json");

require_once('Conn.php');

$select = 'SELECT * FROM produto
Inner join pedidos
on pedidos.CodPedido = produto.CodProduto';

$result = $con->query($select);
$pedidos = [];

while ($row = mysqli_fetch_assoc($result)) {
    $pedidos[] = $row;
}

echo json_encode($pedidos);
?>
