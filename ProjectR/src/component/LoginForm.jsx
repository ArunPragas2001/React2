import { useState } from "react";

export default function LoginForm()
{
  const [username,setUsername]=useState("");
  const [isLoggedIn,setIsloggedIn]=useState(false);

 function handleSubmit(event)
 {
    event.preventDefault();
    if(username.trim()=== "") return;
    setIsloggedIn(true);

 } 

  return(
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Username"
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}/>

            <button type="submit">Login</button>

        </form>

        {isLoggedIn ? <h1>Welcome {username}</h1>:
        <h1>Please Login</h1>}
    </div>

  );
  
}