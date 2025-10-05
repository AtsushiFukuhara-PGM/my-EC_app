<?php
// get_ranking.phpの記述
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

$sql="
SELECT
 p.id,
 p.name,
 p.description,
 p.price,
 p.image_url,
 COALESCE(SUM(oi.quantity), 0)AS sold_count
 FROM products p
 LEFT JOIN order_items oi ON p.id = oi.product_id
 GROUP BY p.id
 ORDER BY sold_count DESC, p.id ASC
 LIMIT 10;
";

$result=$conn->query($sql);
$ranking=[];

while($row=$result->fetch_assoc()){
    $ranking[]=$row;
}

echo json_encode($ranking,JSON_UNESCAPED_UNICODE);
$conn->close();
?>