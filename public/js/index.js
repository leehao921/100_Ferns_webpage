
class Welcome extends React.Component{
    render(){
        return(  
        <div className=" w3-animate-bottom">
        <h1 className='w3-jumbo text-center'>百蕨園</h1>
        <hr className='w3-border-grey'style={margin} ></hr>
        <p className='text-center '>Start at 2020</p>   
        <img className="arrowBounce click_img" src={arrow} style={size}></img>
      </div>
      ) }

}
const margin={margin:"auto",width:"40%"}
const size={  width:"50px" ,height:"50px"}
const arrow={"./css/img/click.png"}


ReactDOM.render(
    
    <Welcome/>,
    document.getElementById('Ferns_Title')
    
);

