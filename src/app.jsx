import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import Cart from './Cart'
import Heading from "./Heading";
import Navigation from "./Navigation";


function App() {
    return (
        <>  
            
             
            <Navigation/>
            
            <div className="text-white text-center">
                <div className="container">
                   <Heading/>
                </div>
            </div>
            <h1 style={{textAlign:'center',color:'#666439',paddingTop:'3%',paddingBottom:'2%'}}>SHOP</h1>
            <Cart/>
            
            
        </>
    );
}

export default App;