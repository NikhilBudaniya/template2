import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navigation=()=>{
    return(
        <>
        <div className="container" style={{maxWidth:'80%',paddingLeft:'20%'}}>
        <nav className="navbar navbar-expand-sm  navbar-light bg-light"  >
          <div className="container-fluid" >
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
             <ul className="navbar-nav me-auto  mb-lg-0 ">
               <li className="nav-item" >
               <a className="nav-link active" aria-current="page" href="#" style={{color:'#666439',fontSize:'75%'}}>Home</a>
               </li>
               <li className="nav-item" style={{marginLeft:'10%'}}>
               <a className="nav-link active" aria-current="page" href="#" style={{color:'#666439',fontSize:'75%'}}>Shop</a>
               </li>
               <li className="nav-item" style={{marginLeft:'10%'}}>
               <a className="nav-link active" aria-current="page" href="#" style={{color:'#666439',fontSize:'75%'}}>About</a>
               </li>
               <li className="nav-item" style={{marginLeft:'10%'}}>
               <a className="nav-link active" aria-current="page" href="#" style={{color:'#666439',fontSize:'75%'}}>Contact</a>
               </li>
               <li className="nav-item"  style={{marginLeft:'15%'}}>
               <a className="nav-link active" aria-current="page" href="#" style={{color:'#666439',fontSize:'70%'}}>
               <AddShoppingCartIcon/>
               </a>
               </li>
               <li className="nav-item" style={{marginLeft:'25%'}} >
               <a className="nav-link active" aria-current="page" href="#" style={{color:'#666439',fontSize:'75%',whiteSpace:'nowrap'}}>
               <AccountCircleIcon/> <span style={{display:'inline-block'}}>Log In</span></a>
               </li>
            </ul>
            </div>           

          </div>
        </nav>
        </div>

        </>
    )
}
export default Navigation;