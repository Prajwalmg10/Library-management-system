import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/userlogin.css'

const UserLogin = () => {
    const[email,setEmail]=useState([])
    const[password,setPassword]=useState([])
    let navigate=useNavigate()
    let login=()=>{
            navigate("/user/")
    }
    return ( <div className="login">
        <div className="form">
        <h1> USER LOGIN!</h1>
            <form action="" onSubmit={login}>
                <div className="input">
                    <label htmlFor="email">Email*</label>
                    <input required name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                </div>
                <div className="input">
                    <label htmlFor="password">Password* </label>
                    <input required name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
                </div>
                <button type="submit">Login</button>
            </form>
            <Link> Creat a new account</Link>
            </div>
    </div> );
}
 
export default UserLogin;