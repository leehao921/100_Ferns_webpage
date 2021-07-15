
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

class Welcome extends React.Component{
    render(){
        return(  
            <div  className="Ferns_Title">
        <div className=" w3-animate-bottom">
        <h1 className='w3-jumbo text-center'>百蕨園</h1>
        <hr className='w3-border-grey'style={margin} ></hr>
        <p className='text-center arrowBounce'>Start at 2020</p>   
        </div>
        </div>
      ) }
}
const margin={margin:"auto",width:"40%"}

class Menu extends React.Component{
    render(){
        return(   
        <div className="w3-animate-opacity  w3-text-white container">
            <div className="d-flex justify-content-center">
                <div className="
                 menu_container" onClick={()=>window.location.href='background.html'}>
                <h1 className='w3-jumbo text-center' >背景故事</h1>
                <hr className='w3-border-grey' style={margin}></hr>
                <p className='text-center'>Back Ground Story</p>   
                </div>
                <div className="
                menu_container" onClick={()=>window.location.href='introduction.html'}>
                <h1 className='w3-jumbo text-center' >植物圖鑑</h1>
                <hr className='w3-border-grey' style={margin}></hr>
                <p className='text-center'>Introduction </p>   
                </div>
            </div>
            </div>
      ) 
    }
}



ReactDOM.render(
    <Index/>,
    document.getElementById('index')
    
);




