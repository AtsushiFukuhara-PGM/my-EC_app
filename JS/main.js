// main.jsの記述

// ルーティング（ハッシュでページ切り替え）
function showPage(hash){
    const cleanHash=(hash||"#home").split("?")[0];
    const id=(hash.includes("?"))?new URLSearchParams(hash.split("?")[1]).get("id"):null;
    
    const pageId=cleanHash.replace("#","page-");
    document.querySelectorAll(".page").forEach(s=>s.classList.remove("active"));

    const target=document.getElementById(pageId);
    if(target){
        target.classList.add("active");

        //商品詳細ページならロード
        if(pageId==="page-product"&&id){
            loadProductDetail(id);
        }
        // カート内表示ページでロード
        if(pageId==="page-cart"){
            loadCart();
        }
        // 注文履歴
        if(pageId==="page-orders"){
            loadOrders();
        }
        // ランキングページ
        if(pageId==="page-ranking"){
            loadRanking();
        }
        // // お問い合わせページ
        // if(pageId==="page-contact"){
        //     setupContact();
        // }
    }
}

window.addEventListener("hashchange",()=>showPage(location.hash));
window.addEventListener("DOMContentLoaded",()=>{
    showPage(location.hash);
    loadProducts();
    setupContact();
});