// cart.jsの記述

// カート表示・更新
async function loadCart(){
    try{
        //カート取得
        const res=await fetch("get_cart.php");
        const items=await res.json();
        const cartEl=document.getElementById("cart-items");
        const tpl=document.getElementById("cart-item-template");
        cartEl.innerHTML="";

        let total=0;

        items.forEach(it=>{
            total+=Number(it.subtotal);
            const node=tpl.content.cloneNode(true);

            node.querySelector(".p-image").src=it.image_url;
            node.querySelector(".p-image").alt=it.name;
            node.querySelector(".p-name").textContent=it.name;
            node.querySelector(".p-price").textContent=
            `単価：¥${Number(it.price).toLocaleString()}`;
            node.querySelector(".p-subtotal").textContent=
            `小計：¥${Number(it.subtotal).toLocaleString()}`;
            const qtyValueEl=node.querySelector(".qty-value");
            qtyValueEl.textContent=it.quantity;

            // 数量変更
            node.querySelector(".qty-minus").onclick=()=>{
                let current=parseInt(qtyValueEl.textContent,10);
                updateCart(it.id,current-1);
            };
            node.querySelector(".qty-plus").onclick=()=>{
                let current=parseInt(qtyValueEl.textContent,10);
                updateCart(it.id,current+1);
            };

            // 削除
            node.querySelector(".delete-btn").onclick=()=>deleteCart(it.id);

            cartEl.appendChild(node);
        });

        document.getElementById("cart-total").innerHTML=`<h3>合計：¥${total.toLocaleString()}</h3>`;

        // おすすめ
        const res2=await fetch("get_products.php");
        const products=await res2.json();
        const shuffled=products.sort(()=>0.5-Math.random()).slice(0,4);
        const recEl=document.getElementById("cart-recommend");
        const recTpl=document.getElementById("rec-item-template");

        // 先頭の<h3>を残して初期化
        recEl.innerHTML="<h3>おすすめ商品</h3>";
        shuffled.forEach(p=>{
            const node=recTpl.content.cloneNode(true);

            node.querySelector("a").href=`#product?id=${p.id}`;
            node.querySelector(".r-image").src=p.image_url;
            node.querySelector(".r-image").alt=p.name;
            node.querySelector(".r-name").textContent=p.name;
            node.querySelector(".r-price").textContent=`¥${Number(p.price).toLocaleString()}`;

            recEl.appendChild(node);
        });
    }catch(err){
        console.error("カート表示エラー：",err);
    }
}

// 商品数量変更
async function updateCart(cartId,newQty){
    if(newQty<=0){
        return deleteCart(cartId);
    }
    const res=await fetch("update_cart.php",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({cart_id:cartId,quantity:newQty})
    });
    const result=await res.json();
    if(result.success){
        loadCart();
    }else{
        alert("数量変更失敗");
    }
}

// 商品デリート関数
async function deleteCart(cartId){
    const res=await fetch("delete_cart.php",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({cart_id:cartId})
    });
    const result=await res.json();
    if(result.success){
        loadCart();
    }else{
        alert("削除失敗");
    }
}

// 購入処理
async function purchase(){
    try{
        const res=await fetch("purchase.php",{method:"POST"});
        const result=await res.json();
        if(result.success){
            alert("注文完了！注文番号："+result.order_id+"\n合計：￥"+Number(result.total).toLocaleString());
            loadCart();
        }else{
            alert("購入失敗："+(result.error||"不明なエラー"));
        }
    }catch(err){
        console.error("購入エラー：",err);
        alert("サーバーエラーが発生しました");
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    const btn=document.getElementById("purchase-btn");
    if(btn){
        btn.onclick=purchase;
    }
});