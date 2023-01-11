import { useState } from "react";
import {useNavigate} from 'react-router-dom'
const AddUser = () => {
    let [name, setName] = useState([])
    let [email, setEmail] = useState([])
    let [phoneNumber,setPhoneNo]=useState([])
    let [password,setPassword]=useState([])
    let navigate=useNavigate()
    let adduser = (e) => {
        e.preventDefault()
        let data = {name,email,phoneNumber,password}
        fetch("http://localhost:1001/users", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        alert(` Adding new user`)
        navigate("/admin/user-list")
    }
    return (<div className="adduser">
        <h1 style={{margin:"0px",textAlign:"center"}}>ADD USERS</h1>
       <div className="forms">
       <form action="" onSubmit={adduser}>
            <div className="name">
                <label htmlFor="name">Name*</label>
                <input required name="name" type="text" value={name} onChange={(e) => { setName(e.target.value) }}  placeholder="Enter Name" />
            </div>
            <div className="email">
                <label htmlFor="email">Email*</label>
                <input required name="email" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }}  placeholder="Enter Email" />
            </div>
            <div className="phoneNo">
                <label htmlFor="phoneNo">Phone Number*</label>
                <input required name="phoneNo" maxLength={10} minLength={10} type="tel" value={phoneNumber} onChange={(e) => { setPhoneNo(e.target.value) }}  placeholder="Phone Number"  />
            </div>
            <div className="password">
                <label htmlFor="password">Password*</label>
                <input required minLength={6} name="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="password" />
            </div>
            <button>Submit</button>
            </form>
       </div>
        
    </div>);
}

export default AddUser;