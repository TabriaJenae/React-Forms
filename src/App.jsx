import Authenticate from './components/Authenticate';
import SignUpForm from './components/SignUpForm';
import React, {useState} from 'react';
import './App.css'





function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <Authenticate token={token} setToken={setToken}/>
      <SignUpForm token={token} setToken={setToken}/>
    </>
  )
}

export default App
