const Ferns_Title=document.getElementById('Ferns_Title');

function init(){    
    const Ref=firebase.database().ref('plant/');
    Ref.on("value",snapshot=>{
        console.log("read firebase ")
        let content=[];
        snapshot.forEach((snap)=>{
            console.log(snap)
            content.push(snap.val());//push all the infor to the content
        });
        console.log(content)
    });

}

window.onload = function(){
    console.log("init state")
    init();
}
