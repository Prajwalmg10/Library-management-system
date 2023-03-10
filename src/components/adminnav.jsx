import { Link } from "react-router-dom";
import '../styles/adminnav.css';
const Adminnav = () => {
    return ( <div className="nav">
        <div className="navpro">
            <Link>Admin</Link>
        </div>
        <div className="navimg">
              <a href=""> <img src="images/navlogo.png" alt="" /></a>
        </div>
        <div className="navlinks">
            <ul type="none">

                <li><Link to="/admin/">Home</Link></li>
                <li><Link to="/admin/add-book">Add Books</Link></li>
                <li><Link to="/admin/add-user">Add User</Link></li>
                <li><Link to="/admin/book-list">Books List</Link></li>
                <li><Link to="/admin/user-list">Users List</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
        </div>
    </div> );
}
 
export default Adminnav;