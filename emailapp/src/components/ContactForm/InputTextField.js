import React, { Component } from 'react'
import './InputTextField.css'

const InputTextField = ({ value, textChange, type, name, backgroundColor}) =>{
  return (
    <input  className ="inputTextField" type={type} style={{'backgroundColor': backgroundColor || '#FFFFFFF'}} name={name} value={value} onChange={(e)=>textChange(e)}/>
  ) 
}
export default InputTextField;
