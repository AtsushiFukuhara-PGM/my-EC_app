<?php
// delete_cart.phpの記述
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

//JSONリクエストを取得
$data=json_decode(file_get_contents("php://input"),true);

$cart_id=intval($data['cart_id']??0);

if($cart_id>0){
    $stmt=$conn->prepare("DELETE FROM cart WHERE id=?");
    $stmt->bind_param("i",$cart_id);
    $ok=$stmt->execute();
    $stmt->close();

    echo json_encode(["success"=>$ok]);
}else{
    echo json_encode(["success"=>false,"error"=>"invalid params"]);
}
$conn->close();
?>