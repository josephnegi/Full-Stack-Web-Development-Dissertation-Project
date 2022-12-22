import React from 'react';
import {useNavigate} from 'react-router-dom';
export default function Button(props) {
  const navigate = useNavigate();
  return(
    <div>
      <button className={props.class}
        onClick={() => navigate(props.link)}>
      {props.text}
      </button>
    </div>
  )
}
