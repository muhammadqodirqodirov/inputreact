import axios from "axios";
import React from "react";
import { styled } from "styled-components";

    export const Input =({type,StartIcon,EndIcon,...props})=>{
  const [value,setVal]=React.useState([])
    const submit =(e)=>{
        e.preventDefault()
        
    axios.post(" http://localhost:3000", { title: value })
    .then(res => {
      console.log(res.data);
    })
    .catch(error => {
      console.log(error);
    })
                
            
        
    }
    const onChange=(e)=>{
    }

    return <form onSubmit={submit}>
  <Inputs value={value} onChange={e => setVal(e.target.value)}  {...props} type={type} placeholder='Enter your login'>

  </Inputs>
  <Button onClick={submit} className="btn"  type="submit">Send</Button>
  </form>  

}
const Button = styled.button`
   padding : 8px 32px;
   border-radius: 5px ;
   box-shadow: 0 0 13px 0  #2cf42cb3,0 0 13px 0 #2cf42c; 
   background-color:  hsla(120, 100%, 25.098039215686274%, 0.555);
   &:hover {
    background-color: green;
    border :2px solid blue;
    box-shadow: green 0px 0px 10px, green 0px 0px 20px;;
   }
`

const Inputs = styled.input`
    padding: 8px 32px;
    border:1px solid black;
    border-radius: 5px;
    &:active{
        background-color: blue;
        transition: 0.7s ease;
    }
    &:hover{
        border:4px solid blue   ;
    }

`