import { Route, Routes } from "react-router-dom";
import BookList from "./booklist";
import ReadBook from "./readbook";
import UserNavbar from "./usernavbar";
import UserPoratl from "./userportal";

const UserHome = () => {
    return ( <div className="userhome">
        <UserNavbar/>
        <Routes>
            <Route path="/" element={<UserPoratl/>}/>
            <Route path="/book-list" element={<BookList/>} />
            <Route path="/book-list/:id" element={<ReadBook/>}/>
        </Routes>
    </div> );
}
 
export default UserHome;