import React from "react";

const Heading=()=>{
    return(
        <>
           
           <h1 className="position-relative h1">
               <img src="./img/pic.jpg" alt="Not Found" className="img-fluid" style={{maxHeight:'400px',width:'100%'}}/>
               <div className="position-absolute top-50 start-50 translate-middle" style={{border:'2px soild #666439',outlineOffset:'-2px', background:'white',color:'#666439',border:'1px solid #666439',width:'35%'}}>FLAMINGO <br/>DESIGNS
 
               <hr style={{marginLeft:'8%',marginRight:'8%',border:'1px solid green',padding:'',marginTop:'5%',marginBottom:'2%'}}></hr>
               <h4>HAND CRAFTED COLLECTION</h4>
               </div>
           </h1>
        </>
    )
}


export default Heading;