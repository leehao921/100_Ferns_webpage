class NavBar extends React.Component {

    render(){
        return(

              <nav class=" navbar navbar-expand-md navbar-dark bg-dark">
        
        <h1 class="navbar-brand" type="button" id="bar_title" href="index.html" >百蕨園</h1>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="index.html">首頁 <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="background.html">背景故事</a>
            <a class="nav-item nav-link" href="introduction.html">蕨類圖鑑</a>
          </div>
        </div>
        </nav>
        )
    }
}

ReactDOM.render(
  <NavBar/>,document.getElementById('navbar')
);
