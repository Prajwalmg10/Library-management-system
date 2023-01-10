import { useState, useEffect } from "react";
import '../styles/userlist.css'
const UserList = () => {
    const[user,setuser]=useState([])

    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await fetch("http://localhost:1001/users")
            let data=await response.json()
            setuser(data)
        }
        fetchdata()
    },[])
    let handleremove=(id,name)=>{
        setuser(user.filter(d=>d.id!=id))
        alert(`Removing User ${name}`)
    }
    return ( <div className="userlist">
        <h1>User List</h1>
        <h2>Number of User : {user.length}</h2>
            {user.map((d)=>(
                <div className="user">
                    <h2>Name : {d.name}</h2>
                    <h2>email :{d.email}</h2>
                    <h2>Phone Number :{d.phoneNumber}</h2>
                    <button className="delete" onClick={()=>{handleremove(d.id,d.name)}}>Remove</button>
                </div>
            ))}
    </div> );
}
 
export default UserList;