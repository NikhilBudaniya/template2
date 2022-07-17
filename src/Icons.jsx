import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Icons=()=>{
    const [Items,setItems]=useState(1)
    const add=()=>{
      setItems(Items+1);
    }
    const remove=()=>{
      setItems(Items-1)
    }
    return(
        <>
          <span style={{float:'left'}}>
            <Button disabled={Items<=1} onClick={remove} ><RemoveIcon/></Button>
          </span>
          <span className="h4" style={{float:'center',textAlign:'center'}}>{Items}</span>
          <span style={{float:'right'}}>
            <Button onClick={add}><AddIcon /></Button>
          </span>  
        </>
    )
}
export default Icons;