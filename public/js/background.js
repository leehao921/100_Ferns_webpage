class Content extends React.Component {

render(){
    return(<div>
        <div class="LayOut">
    <h1> 成立背景</h1>
    <p>About Fern Garden</p>
</div>
<div class="container">
    <div class="content">
        <p>在四季更迭的日子裡，以從容優雅的姿態自由生長的蕨類們，年復一年，靠著極其微小的孢子作為最主要的傳播與繁殖媒介。早在四億年前，蕨類們的孢子就已肩負起傳播後代的重責大任，時至今日，即便許多古老的分支早已滅絕，卻能在六千六百萬年前的第五次物種大滅絕後重新「蕨」起，幽幽自適地隱居於森林當中</p>
        <p>現生的蕨類植物目前認為有超過12,000種，而在台灣就有超過820種的蕨類植物生存其中，也就是說全世界約6%的現生蕨類物種就棲息在台灣這塊島嶼上。若從島嶼蕨類植物之物種總數來排序，台灣是世界第五豐富的島嶼，得天獨厚的蕨類植物生態無疑是世界上難覓其二的寶地，並能藉此認識與研究這群古老植物的多樣性與演化。</p>
        <p>而該如何保育這些珍貴的多樣性，使其免於未來可能發生的生物大滅絕，不只是科學家，也是現今所有公民的重要任務！台灣的蕨類植物近20%遭受到威脅或更危急的滅絕風險，特有物種則受到更高的威脅比例，然而更重要的是，還有些許物種因為基礎資料不足導致目前無法評估且暴露在未知程度的風險中。這些特有蕨類植物若從台灣這個小島消失，等同於在生物演化史中畫下句點。</p>
        <p>近十年來，清大生物資源保種研究中心與辜嚴倬雲植物保種中心，攜手進行著許多生態保育教學及研究，期盼這樣的理念能扎根在清華學子的心中，進而擴展至大眾。而百蕨園，即是承載這樣的心念而生的新綠地，顛覆傳統將各種相關收藏存放於生命科學院的方式，而是直接落地深根於校園，願未來經過此地的每位學生，都能透過隨風飄散的蕨類孢子們，在心中一同萌芽保育生態多樣性的信念</p>

    </div>

</div>
    </div>);
        
    }
}

class Back_story extends React.Component{
    render()
    {
        return (
        <React.Fragment>
        <NavBar/>
        <Content/>
        <Footer/>
        </React.Fragment>
        )
    }

}

ReactDOM.render(<Back_story/>,document.getElementById("Back_story")
);
