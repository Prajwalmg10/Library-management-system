import { Link } from "react-router-dom";

const UserNavbar = () => {
    return ( <div className="nav">
    <div className="navpro">
        <Link>User</Link>
    </div>
    <div className="navimg">
           <img src="" alt="" />
    </div>
    <div className="navlinks">
        <ul type="none">
            <li><Link to="/user/">Home</Link></li>
            <li><Link to="/user/book-list">Books List</Link></li>
            <li><Link to="/">Logout</Link></li>
        </ul>
    </div>
    </div> );
}

export default UserNavbar;