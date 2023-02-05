import React from "react";
import "./UserCard.css";
import {propTypes} from 'prop-types'
const UserCard = ({imageURL,avatarShape,name,description,backgroundColor,title,isRequired}) => {
  return (
    <div data-testid="usercard" className={"usercard"}>
      <img  src={imageURL} alt={name} className={`img ${backgroundColor||'red'} ${avatarShape||'round'}`}/>
       {name}
       {title}
       {description}
    </div>
  );
};

export default UserCard;
