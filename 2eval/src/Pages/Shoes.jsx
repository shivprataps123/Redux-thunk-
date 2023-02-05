import React, { useEffect } from "react";
import Filter from "../Components/Filter";
import { useSelector,useDispatch } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getShoeData } from "../Redux/AppReducer/action";
import ShoeCard from "../Components/ShoeCard";

const Shoes = () => {
  const shoes=useSelector((state)=>state.AppReducer.shoes);
  const [searchParams]=useSearchParams();
  const location=useLocation();
  const dispatch=useDispatch();

  useEffect(()=>{
    if(shoes.length===0|| location.search){
      const getParams={
        params:{
          category:searchParams.getAll("category"),
        }
      }
      dispatch(getShoeData(getParams));

    }
  },[location.search])
  return (
    <div>
      <Filter />
      <div>
        {shoes?.length>0&&
        shoes.map((item)=>{
          return (
            <div key={item.id}>
              <Link to={`/shoes/${item.id}`}>
              <ShoeCard {...item} />
              </Link>
            </div>
          )
        })}
        {/* Map through the shoes list here using ShoeCard Component */}
      </div>
    </div>
  );
};

export default Shoes;
