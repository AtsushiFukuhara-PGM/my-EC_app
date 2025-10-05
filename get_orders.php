<?php
// get_orders.phpの記述
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

$user_id=1;

$sql="
SELECT o.id as order_id, o.total, o.created_at,
i.product_id, p.name, p.image_url, i.quantity, i.price
FROM orders o
JOIN order_items i ON o.id=i.order_id
JOIN products p ON i.product_id=p.id
WHERE o.user_id=?
ORDER BY o.created_at DESC, o.id DESC
";

$stmt=$conn->prepare($sql);
$stmt->bind_param("i",$user_id);
$stmt->execute();
$res=$stmt->get_result();

$orders=[];
while($row=$res->fetch_assoc()){
    $oid=$row['order_id'];
    if(!isset($orders[$oid])){
        $orders[$oid]=[
            "order_id"=>$oid,
            "total"=>$row['total'],
            "created_at"=>$row['created_at'],
            "items"=>[]
        ];
    }
    $orders[$oid]["items"][]=[
        "product_id"=>$row["product_id"],
        "name"=>$row["name"],
        "image_url"=>$row["image_url"],
        "quantity"=>$row["quantity"],
        "price"=>$row["price"]
    ];
}

echo json_encode(array_values($orders),JSON_UNESCAPED_UNICODE);
?>