import React, { useState } from 'react'
import './Likebutton.css'
import { AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai";

const Likebutton = () => {
  const [added, setAdded] = useState(false);

  const addFunction = () => {
    setAdded(!added);
  };

  return (
    <div>
      <button className="FriendBtn" onClick={addFunction}>
        <span className="IconContainer">
          {added ? <AiOutlineUserDelete className="icon" /> : <AiOutlineUserAdd className="icon" />}
        </span>
        <p className="text">{added ? 'Added' : 'Add Friend'}</p>
      </button>
    </div>
  );
}

export default Likebutton;
