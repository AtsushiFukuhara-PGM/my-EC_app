<?php
// purchase.phpの記述
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

$conn->begin_transaction();
try{
    // カートの中身を取得
    $cart=$conn->query("SELECT c.product_id,p.price,c.quantity
     FROM cart c JOIN products p ON c.product_id=p.id
     WHERE c.user_id=$user_id");
    $total=0;
    $items=[];
    while($row=$cart->fetch_assoc()){
        $total+=$row['price']*$row['quantity'];
        $items[]=$row;
    }
    if(empty($items)){
        throw new Exception("カートが空です");
    }

    // 注文作成
    $stmt=$conn->prepare("INSERT INTO orders(user_id,total) VALUES(?,?)");
    $stmt->bind_param("id",$user_id,$total);
    $stmt->execute();
    $order_id=$stmt->insert_id;

    // 注文明細＆在庫更新
    foreach($items as $it){
        // 注文明細
        $stmt=$conn->prepare("INSERT INTO order_items(order_id,product_id,quantity,price) VALUES(?,?,?,?)");
        $stmt->bind_param("iiid",$order_id,$it['product_id'],$it['quantity'],$it['price']);
        $stmt->execute();
        // 在庫を減らす
        $stmt=$conn->prepare("UPDATE products SET stock=stock-? WHERE id=? AND stock>=?");
        $stmt->bind_param("iii",$it['quantity'],$it['product_id'],$it['quantity']);
        $stmt->execute();
        if($stmt->affected_rows==0){
            throw new Exception("在庫不足の商品があります");
        }
    }

    // カートを空に
    $conn->query("DELETE FROM cart WHERE user_id=$user_id");

    $conn->commit();
    echo json_encode(["success"=>true,"order_id"=>$order_id,"total"=>$total]);
}catch(Exception $e){
    $conn->rollback();
    http_response_code(500);
    echo json_encode(["success"=>false,"error"=>$e->getMessage()]);
}
$conn->close();
?>