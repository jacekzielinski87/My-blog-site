// eslint-disable-next-line no-unused-vars
import React from 'react';
import {auth, provider} from '../Firebase-config';
import {signInWithPopup} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Login({setIsAuth}) {
  let navigate = useNavigate();

  const SignInWithGoogle = () => {
    // eslint-disable-next-line no-unused-vars
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true)
      setIsAuth(true);
      navigate('/');
    })
  }

  return (
    <div className='loginPage'>
      <p>
        Sign in With Google to Continue
      </p>
      <button className='login-with-google-btn' onClick={SignInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  )
}

export default Login;