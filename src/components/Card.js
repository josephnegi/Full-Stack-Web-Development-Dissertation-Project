import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import ImageViewer from '../views/ImageViewer.js';


export default function Card(props) {
  const [ii, setIi] = useState('');
  const img = require('../user-images/'+props.imgid+'.jpg');
  const path1 = "/images/" + props.imgid;

  useEffect(() => {
    switch (props.imgid) {
      case 'a0': return setIi('a1');
      case 'b0': return setIi('b1');
      case 'c0': return setIi('c1');
      case 'd0': return setIi('d1');
      default:   return setIi('');
    }
  },[])
console.log(ii);
  return(
      <Link to={path1} state={{ imgid: props.imgid, uid:props.uid, category:props.category}}>
      <div className="img-card-parent">
      <img src={img} alt='' className="card-img-1" />
      {/*
      <img src={
        (ii !='')?
        require('../user-images/'+ii+'.jpg'):''
      } alt='' className="card-img-2" />
      */}
      </div>
      </Link>
  )
}
