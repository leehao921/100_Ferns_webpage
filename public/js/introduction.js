class Ferns extends React.Component{

    constructor(){
        super()
    this.state={
        plants:
        [],

    };
}
    async componentDidMount() {
        console.log("read stuff")

        firebase.database().ref("plant/").once("value",snapshot=>{
            console.log("read firebase ")
            snapshot.forEach((snap)=>{
                console.log(snap.val().name+" insert")
                let content=[];
                content=snap.val();
                
                firebase.storage().ref("Plant/"+content.name+".jpg").getDownloadURL().then((url)=>{
                    content.URL=url
                })

                console.log("content: "+content.URL)

                this.setState({plants:this.state.plants.concat(content)});
            });

            // this.state.plants.forEach((snap)=>{

            //     firebase.storage().ref("Plant/"+snap.name+".jpg").getDownloadURL().then((url)=>{
            //         snap.URL=url
            //     })
            // })

        });
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
            console.log(plant.URL)
            console.log(plant.name )
            return (
              <Cards 
                name={plant.name} 
                body={plant.description} 
                url={plant.URL} 

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
            <div class="flip">
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


