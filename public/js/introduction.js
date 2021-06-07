class Ferns extends React.Component{

    constructor(){
        super()
    this.state={
        plants:
        [],

    };
}
    componentDidMount() {
        console.log("read stuff")
        let   content=[];
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
               console.log(url)
               console.log("url: "+URL)
                }).then(()=>{
                    this.setState({plants:this.state.plants.concat(content)});
                })
                
            });
            
        })
        
        console.log(this.state.plants)
    }

    render(){
        let PlantCards=this._getInfo();
        return(
            <div>
                <h1>demo</h1>
                {PlantCards}
            </div>

        );
    }

    _getInfo(){
        console.log("mapping")
        
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
}








class Cards extends React.Component{


    render(){
        var getImg={
            backgroundImage: 'url(' + this.props.url + ')',
        }
        console.log("add card")
        return(
            <div class="flip  w3-animate-bottom">
                {this.props.key}
                <div class="front" style={getImg}>
                    <h1 class="text-shadow">{this.props.name}</h1>
                </div>
                <div class="back">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.body}</p>
                </div>
            </div>
            
        );
       
    }
}





ReactDOM.render(
    
    <Ferns/>,
    document.getElementById('Introduction')
    
);


