// products.jsの記述

// 商品一覧
async function loadProducts(){
    try{
        const res=await fetch("get_products.php");
        const products=await res.json();
        const el=document.getElementById("product-list");
        el.innerHTML="";

        products.forEach(p=>{
            const card=document.createElement("div");
            card.className="card";
            card.innerHTML=`
            <a href="#product?id=${p.id}">
                ${p.image_url ?`<img src="${p.image_url}" alt="${p.name}" style="width:100%;max-height:160px;object-fit:cover;border-radius:6px;margin-bottom:8px;">`:""}
                <h3>${p.name}</h3>
                </a>
                <p>${p.description}</p>
                <p>¥${Number(p.price).toLocaleString()}</p>
            `;
            el.appendChild(card);
        });
        // ボタン押下（今はダミーで）
        el.addEventListener("click",(e)=>{
            if(e.target.tagName==="BUTTON"){
                const id=e.target.getAttribute("data-id");
                console.log("カートに追加：",id);
                // TODO:将来はサーバー連携
            }
        });
    }catch(err){
        console.error("商品取得失敗：",err);
    }
}

// 商品詳細
async function loadProductDetail(id){
    try{
        const res=await fetch("get_product.php?id="+id);
        const p=await res.json();

        // 左
        document.getElementById("p-image").src=p.image_url;
        document.getElementById("p-image").alt=p.name;

        // 中央
        document.getElementById("p-name").textContent=p.name;
        document.getElementById("p-price").textContent="¥"+Number(p.price).toLocaleString();
        document.getElementById("p-desc").textContent=p.description;

        // 右
        document.getElementById("p-price2").textContent="¥"+Number(p.price).toLocaleString();
        document.getElementById("p-stock").textContent=(p.stock>0)?`残り${p.stock}点 在庫あり`:"在庫切れ";

        // カートボタン
        document.getElementById("add-cart-btn").onclick=()=>{
            const qty=document.getElementById("p-qty").value;
            addToCart(p.id,qty);
        };
    }catch(err){
        console.error("詳細取得失敗：",err);
    }
}

// カートに追加
async function addToCart(id,qty){
    try{
        const res=await fetch("add_to_cart.php",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({product_id:id,quantity:qty})
        });
        const result=await res.json();
        if(result.success){
            alert("カートに追加しました！");
        }else{
            alert("カート追加失敗："+(result.error||"不明なエラー"));
        }
    }catch(err){
        console.error("カート追加エラー：",err);
    }
}