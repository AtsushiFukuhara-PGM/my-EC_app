<?php
// contact_submit.phpの記述
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

$conn->set_charset("utf8mb4");

$name=$_POST["name"]??"";
$email=$_POST["email"]??"";
$message=$_POST["message"]??"";

if(!$name||!$email||!$message){
    http_response_code(400);
    echo json_encode(["success"=>false,"error"=>"すべての項目を入力してください"]);
    exit;
}

$stmt=$conn->prepare("INSERT INTO contact_messages(name,email,message) VALUES(?,?,?)");
$stmt->bind_param("sss",$name,$email,$message);

if($stmt->execute()){
    echo json_encode(["success"=>true]);
}else{
    http_response_code(500);
    echo json_encode(["success"=>false,"error"=>"DBエラー：".$stmt->error]);
}

$stmt->close();
$conn->close();
?>