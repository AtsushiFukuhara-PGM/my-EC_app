// contact.jsの記述

async function setupContact(){
    const form=document.getElementById("contact-form");
    if(!form){
        return;
    }
    
    form.addEventListener("submit",async e=>{
        e.preventDefault();
        const formData=new FormData(form);

        try{
            const res=await fetch("contact_submit.php",{
                method:"POST",
                body:formData
            });
            const result=await res.json();

            if(result.success){
                alert("お問い合わせを送信しました。ありがとうございます！");
                form.reset();
            }else{
                alert("送信失敗："+(result.error||"不明なエラー"));
            }
        }catch(err){
            console.error(err);
            alert("通信エラーが発生しました");
        }
    });
}