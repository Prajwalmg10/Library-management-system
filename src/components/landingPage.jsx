import { Link } from "react-router-dom";
import '../styles/landingPage.css'
const LandingPage = () => {
    return (<div className="landingpage">
        <div className="portal">
        <h1>Libraray Management System</h1>
            <div className="portallogin"> 
                <div  className="portal_admin">
                    <img src="images/adminimg.png" alt="" />
                    <Link id="admin_btn" to='/admin-login'>Admin Login</Link>
                </div>
                <div  className="portal_user">
                    <img width="120" src="images/userimg.png" alt="" />
                    <Link id="user_btn" to='/user-login'>User Login</Link>
                </div></div>

        </div>
    </div>)
}

export default LandingPage;