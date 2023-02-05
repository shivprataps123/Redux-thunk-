import React from "react";
import "./Input.css";

const Input = ({type,size,variant,value,handleChange}) => {
  return <input data-testid="inputTag" value={value} onChange={(e)=>handleChange(e)} type={type||'text'} className={`input ${variant||'outline'} ${size|| "md"}`} />;
};

export default Input;
