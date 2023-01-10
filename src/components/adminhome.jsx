import { Routes,Route } from "react-router-dom";
import AddBooks from "./addbooks";
import AddUser from "./adduser";
import Admindashboard from "./admindashboard";
import Adminnav from "./adminnav";
import BookList from "./booklist";
import ReadBook from "./readbook"
import UserList from "./userlist";
const AdminHome = () => {
    return ( <div className="adminhome">
        <Adminnav/>
        <Routes>
            <Route path="/" element={<Admindashboard/>}/>
            <Route path="/book-list" element={<BookList/>}/>
            <Route path="/user-list" element={<UserList/>}/>
            <Route path="/book-list/:id" element={<ReadBook/>}/>
            <Route path="/add-user" element={<AddUser/>}/>
            <Route path="/add-book" element={<AddBooks/>} />
        </Routes>
    </div> );
}
 
export default AdminHome;