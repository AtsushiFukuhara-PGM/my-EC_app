// orders.jsの記述

async function loadOrders(){
    try{
        const res=await fetch("get_orders.php");
        const orders=await res.json();

        const list=document.getElementById("order-list");
        const tpl=document.getElementById("order-template");
        const itemtpl=document.getElementById("order-item-template");
        list.innerHTML="";

        orders.forEach(o=>{
            const node=tpl.content.cloneNode(true);
            node.querySelector(".order-id").textContent="注文番号 #"+o.order_id;
            node.querySelector(".order-date").textContent="注文日時："+o.created_at;
            node.querySelector(".order-total").textContent="合計：￥"+Number(o.total).toLocaleString();

            const itemsBox=node.querySelector(".order-items");
            o.items.forEach(it=>{
                const itemNode=itemtpl.content.cloneNode(true);
                itemNode.querySelector(".item-img").src=it.image_url;
                itemNode.querySelector(".item-name").textContent=it.name;
                itemNode.querySelector(".item-qty").textContent="×"+it.quantity;
                itemNode.querySelector(".item-price").textContent="￥"+Number(it.price).toLocaleString();
                itemsBox.appendChild(itemNode);
            });

            list.appendChild(node);
        });
    }catch(err){
        console.error("注文履歴取得エラー",err);
    }
}