import React, { useState } from "react";
import "./app.css"
import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";
import {posts} from "./data"
const App = () => {

  const [username,setUsername] = useState('')
  const [user,setUser] = useState("")
  console.log(user)
  return (
    <div className='container'>

    { user ? (
     
     
     <>

      
     <Navbar/>
     {posts.map((post) =>(
        <Card key={post.id} post={post} />
     ))}
     
     <span className="username">{user}</span>
     </>
  
      
    ) : (

      <div className=' login'>
      <input type='text' 
       placeholder='username'
        onChange= {(e) =>setUsername(e.target.value)} required />

      <button  onClick= { ()=>setUser(username)} > login</button>
      </div>
    
    )}
</div>  
    
 
     
  );
};

export default App