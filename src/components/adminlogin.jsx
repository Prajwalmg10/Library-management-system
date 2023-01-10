import { useState } from "react"
import '../styles/adminlogin.css'
import { useNavigate } from "react-router-dom"
const AdminLogin = () => {
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const[users,setusers]=useState([])
    let navigate = useNavigate()
    let handlesubmit = (e) => {
        e.preventDefault()
        let data = { email, password }
    
        let admindata = async () => {
            let response = await fetch("http://localhost:1001/users")
            let user=await response.json()
            setusers(user)
        }
        admindata()
        navigate("/admin/")
    //     for (let i = 0; i < users.length; i++) {
    //         if(users[i].email==data.email&& users[i].password==data.password)
    //         {
    //             navigate("/admin/")
    //         }
    //     }
    //     alert('Invalid username or password')
    }


    return (<div className="login">
       
        <div className="form">
           <h1>ADMIN LOGIN!</h1>
            <form action="" onSubmit={handlesubmit}>
                <div className="input">
                    <label htmlFor="email">Email*</label>
                    <input required name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                </div>
                <div className="input">
                    <label htmlFor="password">Password*</label>
                    <input required name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
                </div>
                <button type="submit">Login</button>
            </form>

        </div>
    </div>)
}

export default AdminLogin;