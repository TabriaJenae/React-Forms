import React, {useState} from 'react';

const SignUpForm = () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("")
const [error, setError] = useState(null);

async function handleSubmit(event) {
    event.preventDefault();
    console.log(username, password);

try { 
   const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/signup`);
   const result = await response.json(); 
   console.log(result);
} catch (error) {
    setError(error.message)
}
}
    return ( 
        <>
        <h2>Sign Up!</h2> 
        {error && <p>{error}</p>}
         <form method='POST' onSubmit={handleSubmit}>
       <label >
         Username:{""} 
         <input value = {username}
          onChange={(e)=> 
         setUsername(e.target.value)} />
       </label>
       <label >
         Password:{""}
          <input value={password} 
          onChange={(e)=> 
          setPassword(e.target.value)}/>
       </label>
       <button type='submit'>Submit</button>
     </form>
     </>
    );
}
 
export default SignUpForm;