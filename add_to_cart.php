<?php
// add_to_cart.phpの記述
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

$product_id=intval($data['product_id']??0);
$qty=intval($data['quantity']??1);
$user_id=1;

if($product_id>0){
    $stmt=$conn->prepare("INSERT INTO cart (user_id, product_id,quantity) VALUES(?,?,?)");
    $stmt->bind_param("iii",$user_id,$product_id,$qty);
    $ok=$stmt->execute();

    echo json_encode([
        "success"=>$ok,
        "product_id"=>$product_id,
        "quantity"=>$qty
    ]);
}else{
    echo json_encode(["success"=>false,"error"=>"invalid product_id"]);
}

$conn->close();
?>