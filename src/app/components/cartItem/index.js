'use client'
import { useState } from "react"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CartItem(props){

  const url = " https://res.cloudinary.com/dsyvhttva/image/upload/v1703430079/gip/"
    return (
      <>
          <tr>
            <td>
              <div style={{display:"flex"}}>
              <IconButton aria-label="delete" style={{marginRight:"10px"}}>
         <DeleteIcon />
        </IconButton>
                  <img src={url+props.image} alt='art' style={{width:"75px",marginRight:"10px"}}></img>
                  <h5 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>{props.title}</h5>
              </div>
            </td>
            <td style={{verticalAlign:"middle"}}>{props.price}</td>
            <td style={{verticalAlign:"middle"}}>{props.price}</td>
          </tr>
      </>
    )
}