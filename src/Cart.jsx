import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import Icons from "./Icons";
import AddToCart from "./AddToCart";


const design={
    textAlign:'center',
    color:'#666439'
}
const Cart=()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-6 col-lg-4">
                    <div className="card" style={{border:'none'}}>
                         <img src="./img/pic2.jpg" alt="Not Found" className="card-img-top-fluid"/>
                         <div class="top-left" style={{fontSize:'19px'}}>
                         Best Seller</div>
                         <h5 className="card-title" style={design}>I'm a Product 
                         <br></br>
                         $20.00</h5>
                         <h4 className="card-text " style={{border:'1.5px solid',textAlign:'center'}}>
                             <Icons/>
                             
                         </h4>
                          
                         <AddToCart/>
                             
                        

                    </div>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-4">
                    <div className="card" style={{border:'none'}}>
                         <img src="./img/pic2.jpg" alt="Not Found" className="card-img-top-fluid"/>
                         <h5 className="card-title" style={design}>I'm a Product 
                         <br></br>
                         $25.00
                         </h5>
                         <h4 className="card-text" style={{border:'1.5px solid',textAlign:'center'}}>
                             <Icons/>
                             
                         </h4>
                          
                         <AddToCart/>
                             
                        
                    </div>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-4">
                    <div className="card" style={{outline:'none',boxShadow:'none',border:'none'}}>
                         <img src="./img/pic4.jpg" alt="Not Found" className="card-img-top-fluid"/>
                         <div class="top-left" style={{fontSize:'19px'}}>
                         New</div>
                         <h5 className="card-title" style={design}>I'm a Product 
                         <br></br>
                         $7.50
                         </h5>
                         <h4 className="card-text" style={{border:'1.5px solid',textAlign:'center'}}>
                             <Icons/>
                             
                         </h4>
                          
                         <AddToCart/>
                             
                        
                    </div>
                </div>
            
            
                <div className="col-xs-12 col-md-6 col-lg-4">
                    <div className="card" style={{outline:'none',boxShadow:'none',border:'none'}}>
                         <img src="./img/pic4.jpg" alt="Not Found" className="card-img-top-fluid"/>
                         <h5 className="card-title" style={design}>I'm a Product 
                         <br></br>
                        $15.0
                        </h5>
                        <h4 className="card-text" style={{border:'1.5px solid',textAlign:'center'}}>
                            <Icons/>
                            
                        </h4>
                         
                         <AddToCart/>
                             
                    
                    </div>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-4">
                    <div className="card" style={{border:'none'}}>
                         <img src="./img/pic6.jpg" alt="Not Found" className="card-img-top-fluid"/>
                         <h5 className="card-title" style={design}>I'm a Product 
                         <br></br>
                         $85.00
                         </h5>
                         <h4 className="card-text" style={{border:'1.5px solid',textAlign:'center'}}>
                             <Icons/>
                             
                         </h4>
                          
                         <AddToCart/>
                             
                        
                    </div>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-4">
                    <div className="card" style={{border:'none'}}>
                         <img src="./img/pic6.jpg" alt="Not Found" className="card-img-top-fluid"/>
                         <div class="top-left" style={{fontSize:'19px'}}>
                         Sale</div>
                         <h5 className="card-title" style={design}>I'm a Product 
                         <br></br>
                         <span style={{textDecoration:'line-through'}}>$85.00</span>
                         <span> </span>
                         $80.75
                         </h5>
                         <h4 className="card-text" style={{border:'1.5px solid',textAlign:'center'}}>
                             <Icons/>
                             
                         </h4>
                          
                         <AddToCart/>
                             
                        
                    </div>
                </div>
            
            
                <div className="col-xs-12 col-md-6 col-lg-4">
                    <div className="card" style={{border:'none'}}>
                         <img src="./img/pic7.jpg" alt="Not Found" className="card-img-top-fluid"/>
                         <div class="top-left" style={{fontSize:'19px'}}>
                         Sale</div>
                         <h5 className="card-title" style={design}>I'm a Product 
                         <br></br>
                         <span style={{textDecoration:'line-through'}}>$40.00</span>
                         <span> </span>
                         $36.00
                         
                         </h5>
                         <h4 className="card-text" style={{border:'1.5px solid',textAlign:'center'}}>
                             <Icons/>
                             
                         </h4>
                          
                         <AddToCart/>
                             
                        
                    </div>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-4">
                    <div className="card" style={{border:'none'}}>
                         <img src="./img/pic8.jpg" alt="Not Found" className="card-img-top-fluid"/>
                         <div class="top-left" style={{fontSize:'19px'}}>
                         Sale</div>
                         <h5 className="card-title" style={design}>I'm a Product 
                         <br></br>
                         <span style={{textDecoration:'line-through'}}>$10.00</span>
                         <span> </span>
                         $9.50
                         
                         </h5>
                         <h4 className="card-text" style={{border:'1.5px solid',textAlign:'center'}}>
                             <Icons/>
                             
                         </h4>
                          
                         <AddToCart/>
                             
                        
                    </div>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-4">
                    <div className="card" style={{border:'none'}}>
                         <img src="./img/pic9.jpg" alt="Not Found" className="card-img-top-fluid"/>
                         
                         <h5 className="card-title" style={design}>I'm a Product 
                         <br></br>
                         $130
                         
                         </h5>
                         <h4 className="card-text" style={{border:'1.5px solid',textAlign:'center'}}>
                         <Icons/>
                         
                         </h4>
                         
                             <AddToCart/>
                             
                         
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default Cart;