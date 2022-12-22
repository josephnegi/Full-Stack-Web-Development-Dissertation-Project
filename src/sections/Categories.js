import React, {useState} from 'react';
import Button from '../components/Button.js'
//import {useNavigate} from 'react-router-dom';
export default function() {
  const categories = [
  ['All','/'],
  ['General','/'],
  ['Business','/Business'],
  ];
  //const [category, setCategory] = useState(0);

  return(
    <div className='categories-parent'>
      <select className='categories-dropdown'>
      {categories.map((o, i) => (
        <option key={i} value={i} >
          {o[0]}
        </option>
      ))}
      </select>
      {categories.map((o, i) =>(
        i>0?
        <Button class='category-button' text={o[0]} link={o[1]} />:''
      ))}
    </div>
  )
}
