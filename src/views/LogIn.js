import React, {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

export default function LogIn() {
  const [inputs, setInputs] = useState([])
  const navigate = useNavigate();
  const [logged, setLogged] = useState('')

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]:value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:80/react/api/index', inputs).then(function(response){

      if(response.data !=0){
        //navigate('/', {state:{name:response.data}});
        console.log(response.data);
        localStorage.setItem('uid',response.data);
        navigate('/');
      }
      else{
        console.log('Incorrect credentials');
      }
    });

  }

  return (
    <div id='login-parent'>
        <div id='login-box'>
          <h2 style={{alignSelf: 'center'}}>Log In to your account</h2>
          <form style={{marginTop: '25px'}} onSubmit={handleSubmit}>
            <label>Username: <br/></label>
            <input type='text' name='name' placeholder='eg: loremipsum' id="input-fields"
              onChange={handleChange}
            />
            <br/><br/>
            <label>Password: <br/></label>
            <input type='password' name='password' id="input-fields"
              onChange={handleChange}
            />
            <br/><br/>
            <input type='submit' value='Login' className="sign-up-button"/>
          </form>
          <p>Not a user?  <span>Signup</span></p>

        </div>
    </div>
  )
}
