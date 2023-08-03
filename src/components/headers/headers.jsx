import React from 'react'
import { Input } from '../input/input';

import createGlobalStyle from "styled-components";
import { styled } from "styled-components";
export const Headers = () => {
    const [state,setState]=React.useState([])
  return <>
  
    <Input/>
    {state.map(item=><h3>{item.title}</h3>)}
  </>
  

}
