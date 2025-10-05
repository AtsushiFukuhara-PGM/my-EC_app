<?php
// get_products.phpの記述
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

//データ取得
$sql="SELECT * FROM products";
$result=$conn->query($sql);

$products=[];

if($result->num_rows>0){
    while($row=$result->fetch_assoc()){
        $products[]=$row;
    }
}

//JSONとして出力
header('Content-Type:application/json;charset=UTF-8');
echo json_encode($products,JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

$conn->close();
?>