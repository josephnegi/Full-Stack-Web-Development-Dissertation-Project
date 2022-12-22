import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function UserDetails(props) {
const userid = props.uid;
let n =0;
const [data, setData] = useState([]);
useEffect(() => {
  getData();
}, []);
function getData(){
  //API Call to get role, Name, pfp
  //console.log(userid);
  axios.post('http://localhost:80/react/api/postuserdata.php',{0:userid})
  .then(function(response){
    //console.log(response.data);
    setData(response.data);

    })
  }
  const findpfp = data.find(obj => {
    return obj.id === 1;
  });
  console.log(data)
  //const img = require('../user-images/f.jpg');

  return (
    <div id='outer-div-user-details'>
      <div id='pfp-div'>

      {data.map((val, key)=>(
        <img src={require('../user-images/'+val.pfp+'.jpg')} alt=''/>
      ))}

      </div>
      <div id='user-details-text'>
        <h2>{data.map((val, key)=>(
          <p>{val.name}</p>
        ))}</h2>
        <h4>Freelance Photographer</h4>

      </div>
    </div>
  )
}
