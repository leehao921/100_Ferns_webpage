class Footer extends React.Component {

    render(){
        return(

          <footer class="site-footer">
            <div class="container">
            <div class="row">
                <h6>About</h6>
                <p class="text-justify">百蕨園 <i>CODE WANTS TO BE SIMPLE </i> 這是介紹</p>

            </div>
    
             

            <div class="row">
              <div class="col-md-8 col-sm-6 col-xs-12">
                <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
             <a href="#"> NTHU</a>.
                </p>
              </div>
            
              <div class="col-md-4 col-sm-6 col-xs-12">
                <ul class="social-icons">
                  <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                  
                </ul>
              </div>
            </div>
            </div>
    </footer>


        )
    }
}

ReactDOM.render(
  <Footer/>,document.getElementById('footer')
);
