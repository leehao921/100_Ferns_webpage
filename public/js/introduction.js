class Ferns extends React.Component{
    render(){
        return(
            
<div class="flip">
    <div class="front" style={getImg}>
       <h1 class="text-shadow">{plant.name}</h1>
    </div>
    <div class="back">
       <h2>{plant.name}</h2>
       <p>{plant.description}</p>
    </div>
</div>
        );
    }
}

var _id=0;
const getContent=firebase.database().ref('plant/'+_id)
getContent.once('value').then(function (snapshot){
    snapshot.forEach(function (childshot){
        var temp=childshot.val();
        plant={
            name:temp.name,
            description:temp.description,
            imgUrl:"https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg"
            }
    })
})
var plant={
    name:"name",
    description:"Description ",
    imgUrl:"https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg"
    }
var getImg={
    backgroundImage: 'url(' + plant.imgUrl + ')',
}

ReactDOM.render(
    
    <Ferns/>,
    document.getElementById('Introduction')
    
);

