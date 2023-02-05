import { useSelector } from "react-redux";
import {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getShoeData } from "../Redux/AppReducer/action";
import ShoeCard from "../Components/ShoeCard";

const SingleShoe = () => {
  const {id}=useParams();
  const shoes=useSelector((store)=>store.AppReducer.shoes);
  const [currentShoe,setCurrentShoe]=useState({});
  const dispatch=useDispatch();
  useEffect(()=>{
    if(shoes.length===0){
      dispatch(getShoeData())
    }
  },[shoes.length,dispatch])

  useEffect(()=>{
    if(id){
      const shoe=shoes.find((item)=>item.id===Number(id))
      shoe&&setCurrentShoe(shoe)
    }
  },[id,shoes])

  return (
    <div>
      <h1>Single Shoe Page</h1>
      <img src={currentShoe.image}/>
      <div>{currentShoe.name}</div>
      <div>{currentShoe.category}</div>
    </div>
  );
};

export default SingleShoe;
