import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
export default function SignOut() {
  const navigate = useNavigate();
  useEffect(()=>{
    navigate('/')
  },[])
  return(
    <div>
    {localStorage.removeItem('uid')}
    <span>You have been logged out, redirecting</span>
  </div>
  )
}
