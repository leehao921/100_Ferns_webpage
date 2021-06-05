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

        firebase.database().ref("plant/").on("value",snapshot=>{
            console.log("read firebase ")
            snapshot.forEach((snap)=>{
                console.log(snap.val().name+" insert")
                this.setState({plants:this.state.plants.concat(snap.val())});

            });
            console.log(this.state.plants)

        });
    }

    render(){
        let PlantCards=this._getInfo();
        console.log("init the platform")
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
            console.log(plant.name)
            console.log(plant.description)
            return (
              <Cards 
                name={plant.name} 
                body={plant.description} 
                key={plant.id} 
                />
            ); 
        });
    }
}



class Cards extends React.Component{
    render(){
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


const imgUrl="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg"
var getImg={
    backgroundImage: 'url(' + imgUrl + ')',
}


ReactDOM.render(
    
    <Ferns/>,
    document.getElementById('Introduction')
    
);


