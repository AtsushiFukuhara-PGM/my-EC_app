// ranking.jsの記述

// ランキング
async function loadRanking(){
    try{
        const res=await fetch("get_ranking.php");
        const items=await res.json();

        const tpl=document.getElementById("ranking-item-template")

        const top1=document.getElementById("ranking-top1");
        const top23=document.getElementById("ranking-top23");
        const rest=document.getElementById("ranking-rest");

        // 初期化
        [top1,top23,rest].forEach(el=>el.innerHTML="");

        items.forEach((p,idx)=>{
            const node=tpl.content.cloneNode(true);

            // 順位番号
            const rankIcon=node.querySelector(".rank-number");

            // 順位によって色を変える（例：金・銀・銅）
            if(idx===0){
                rankIcon.innerHTML=`<img src="images/number1.png" alt="1位" class="rank-icon">`;
            }
            else if(idx===1){
                rankIcon.innerHTML=`<img src="images/number2.png" alt="2位" class="rank-icon">`;
            }
            else if(idx===2){
                rankIcon.innerHTML=`<img src="images/number3.png" alt="3位" class="rank-icon">`;
            }else{
                rankIcon.textContent=`#${idx+1}`;
            }

            // 内容埋め込み
            node.querySelector(".rank-link").href=`#product?id=${p.id}`;
            node.querySelector(".rank-image").src=p.image_url;
            node.querySelector(".rank-name").textContent=p.name;
            node.querySelector(".rank-price").textContent=`¥${Number(p.price).toLocaleString()}`;
            node.querySelector(".rank-sold").textContent=`売れた数：${p.sold_count}`;
            
            if(idx===0){
                top1.appendChild(node);
            }else if(idx<=2){
                top23.appendChild(node);
            }else{
                rest.appendChild(node);
            }
        });
    }catch(err){
        console.error("ランキング取得失敗エラー：",err);
    }
}