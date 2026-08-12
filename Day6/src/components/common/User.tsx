import { useState } from "react";

interface User {
  id: string;
  name: string;
}

function User(){
    const [user,setUser]=useState<User|null>(null);

    const handleSetUser = ()=>{
        const user ={
            name:"hariomm",
            id:"123456",
            prasad:"ajvhvdsh"
        }
        setUser(user)
    }

    const handleResetUser =()=>{
        setUser(null)
    }
    return (
      <>
        <button onClick={handleSetUser}>Set user</button>
        {user && <div>{user.name} and  {user.id}</div>}

        {user && <button onClick={handleResetUser}>reset user</button>}
      </>
    );
}

export default User;