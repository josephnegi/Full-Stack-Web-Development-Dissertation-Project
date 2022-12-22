import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useNavigate, useLocation} from 'react-router-dom';

import Header from '../sections/Header.js';
//import Banner from '../components/Banner.js';
//import UserDetails from '../sections/UserDetails.js';
import Gallery from '../sections/Gallery.js';

export default function Profile() {
  const location = useLocation();
  const userid = location.state.uid;

//API Call to get name, username, pfp, cover
  const [input, setInput] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  function getData(){
    //API Call to get role, Name, pfp
    //console.log(userid);
    axios.post('http://localhost:80/react/api/postuserdata.php',{0:userid})
    .then(function(response){
      //console.log(response.data);
      setInput(response.data);

      })
    }

  const banner = require("../images/themarketplace.jpg");
  const img = require('../user-images/f.jpg');
  console.log(input)
    return(
      <div>
        <Header />
        {/*banner and profile text in banner start*/}
        <div className='banner-parent'>
            {input.map((val, key)=>(
            <img src={require('../user-images/'+val.cover+'.jpg')} alt='banner-img'  className='banner-img'/>
            ))}
            <div className='banner-text'>

                <div id='outer-div-user-details'>
                  <div id='pfp-div'>

                  {input.map((val, key)=>(
                    <img src={require('../user-images/'+val.pfp+'.jpg')} alt=''/>
                  ))}

                  </div>
                  <div id='user-details'>
                    <h2 id='profile-name'>
                      {input.map((val, key)=>(
                    <>{val.name}</>
                    ))}
                    </h2>
                    <h4 id='profile-designation'>Freelance Photographer</h4>
                  </div>
                </div>
            </div>
            {/*<span className='credit-text'>@{props.credit}</span>*/}
        </div>
        {/*banner and profile text in banner end*/}
        {/*Gallery start*/}
        <Gallery i={2} uid={userid}/>
        {/*Gallery end*/}
      </div>
    )
}
