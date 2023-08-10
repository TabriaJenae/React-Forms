import React, {useState} from 'react';

const SignUpForm = ({setToken}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const [usernameError, setUsernameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);


    async function handleSubmit(event) {
        event.preventDefault();
      
        if (username.length < 6) {
            setUsernameError("Username must be at least 6 characters in length");
            return;
          } else {
            setUsernameError(null);
          }
          
          // form validation: password
          if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters in length");
            return;
          } else {
            setPasswordError(null);
          }
          
    
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
            { 
                method: "POST", 
                headers: { 
                  "Content-Type": "application/json" 
                }, 
                body: JSON.stringify({ 
                  username: "some-username", 
                  password: "super-secret-999" 
                }) 
              })
            const result = await response.json();
            setToken(result.token);
            console.log(result);   
        } catch (error) {
          setError(error.message);
        }
      }


    return ( 
       <>
       <h2 style={{fontSize:"25px", fontFamily:"Avenir"}}>Sign Up!</h2> 
       {error && <p>{error}</p>}
        <form method='POST' 
        onSubmit={handleSubmit} 
        onClick={() => {
            setUsername(username)
        }}>
      <label >
        Username:{""} 
        <input 
        placeholder='Username'
        value = {username}
         onChange={(e)=> 
        setUsername(e.target.value)} />
      </label>
          
        {/* form validation: username */}
        {usernameError && <p style={{ color: "red"}}>{usernameError}</p>}  
      
      <label >
        Password:{""}
         <input 
         placeholder='Password'
         type='password'
         value={password}
         onChange={(e)=> 
         setPassword(e.target.value)}/>
      </label>
    
         {/* form validation: password */}
         {passwordError && <p style={{ color: "red"}}>{passwordError}</p>}

      <button type='submit' style=
      {{width: "80px", height: "37px", padding: "10px", 
      fontSize:"15px"}}
      >Submit</button>
    </form>
    <p style={{fontSize:"50px", fontFamily:"Avenir"}}>Welcome! {username}</p> 
    </>
 );
}
 
export default SignUpForm;