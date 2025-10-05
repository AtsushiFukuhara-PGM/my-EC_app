<?php
// get_product.phpの記述
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

//URLからidを取得
$id=intval($_GET['id'] ?? 0);

//データ取得
$sql="SELECT * FROM products WHERE id=$id";
$result=$conn->query($sql);

$product=null;
if($result&&$result->num_rows>0){
    $product=$result->fetch_assoc();
}

//JSON出力
header('Content-Type:application/json; charset=UTF-8');
echo json_encode($product,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);

$conn->close();
?>