<?php
// get_cart.phpの記述
//DB接続情報
$host="localhost";
$user="root";
$pass="";
$dbname="myEC_app";

//接続
$conn=new mysqli($host,$user,$pass,$dbname);

//接続エラーチェック
if($conn->connect_error){
    die("Connection failed:".$conn->connect_error);
}

$user_id=1;

$sql="SELECT c.id,p.name,p.price,c.quantity,(p.price*c.quantity) AS subtotal,p.image_url
    FROM cart c JOIN products p ON c.product_id=p.id
    WHERE c.user_id=$user_id ORDER BY c.id DESC";
$result=$conn->query($sql);

$items=[];
while($row=$result->fetch_assoc()){
    $items[]=$row;
}

header('Content-Type:application/json; charset=UTF-8');
echo json_encode($items,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
$conn->close();
?>