# [百蕨園網站](https://ferns-4626b.web.app)

![網站圖片](https://i.imgur.com/KGNEGv0.jpg)
>[TOC]

## 網站規劃





### 功能介紹 Goals
![圖鑑](https://i.imgur.com/UJeNX4t.jpg)

- 線上資料庫
- 使用者互動
- 介紹和簡介
- 視覺化的翻轉圖鑑  

當滑鼠觸碰螢幕圖片時，圖片會自動翻轉成介紹畫面，相信視覺化的圖片和良好的互動性能增加使用者的滿意度。
此外本網站也能作為清華大學第一個線上的蕨類植物圖鑑，未來也預計加入動態的親屬表，讓使用者在查閱圖鑑的時候能更加的活潑，相信同時也能增加使用者的使用頻率。

目前所有資料都存在於Google公司的[Firebase](https://firebase.google.com) 免費雲端上面，希望未來能夠有專屬的伺服器，以增加提取速度。



### 風格主題 Theme
![Theme](https://i.imgur.com/BiJaVU4.jpg)
- 典雅手繪風
- 高雅現代風
- 3D字體

網站的各處都設計有互動性的設計和一些有趣的動畫物件，讓使用者覺得他們不只是在瀏覽一個無聊的文件，更是在暢遊一本會動的植物圖鑑，讓使用者在使用圖鑑上不僅有知識的衝擊更有美學的享受。

### TODO 
- [ ] webpack to manage the 
- [ ] 網路讀取優化
- [ ] Ferns Logo- Favi-con
- [ ] Node.js做環境管理
- [ ] Footer


## 更新日誌

####  -0602Component Base 
> 將Index和Menu改為component base 的方式呈現，能大幅度增加主畫面到Menu的時間，但問題是每次回到Menu都要從Index開始跑，不知道會不會妨礙到使用者的體驗。

Onclick function in Component base的應用
```javascript
class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          showWelcome: true,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
      }
      _onButtonClick() {
        this.setState({
            showWelcome: false,
        });
      }
      render() {
        return (
          <div onClick={this._onButtonClick}>
            {this.state.showWelcome ?
               <Welcome /> :
               <Menu/>
            }
          </div>
        );
      }
}
```

####  -0530 DataBase & Storage
> 終於將Firebase弄上來了，花最多時間也最沒有頭緒的是環境設定...還是不懂為什麼不能用Import。  
> DataBase和Storage的讀取會有時間差，故先用一個Array裝著所有的東西，最後用Await function 將東東全部Upload 上去  
> Class 的inside container 很好用可以研究一下。
```javascript
    componentDidMount() {
        console.log("read stuff")
        let   content=[];//先將東西裝起來
        let URL;
        firebase.database().ref("plant/").once("value",snapshot=>{
            console.log("read data ")
            snapshot.forEach((snap)=>{
                //content.TEST=snap.val().name.toString();
                firebase.storage().ref("Plant/"+snap.val().name+".jpg").getDownloadURL().then((url)=>{
               URL=url;
               content={
                "url":URL,
                "name":snap.val().name,
               "description":snap.val().description,
           "id":' ' }
               console.log("url: "+URL)
                }).then(()=>{//最後當Storage讀取成果後，再upload 上去
                    this.setState({plants:this.state.plants.concat(content)});
                })
            });
        })
        
        console.log(this.state.plants)
    }
```

```javascript
 render(){
        let PlantCards=this._getInfo();//得到每張卡片的資訊
        return(
            <div>
                <h1>demo</h1>
                {PlantCards}
            </div>

        );
    }

    _getInfo(){
        console.log("mapping")
        //用Class裡面的inside container 直接迴轉maping 的資料
        return this.state.plants.map((plant) => { 
            console.log(plant.url)
            console.log(plant.name)
            return (
              <Cards 
                name={plant.name} 
                body={plant.description} 
                url={plant.url} 

                />
            ); 
        });
    }

```

### Reference
做[花花網頁](https://www.c82.net/twining/)的大神：https://www.c82.net/blog/?id=80  
[Plant_database visualisation](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6120445/)