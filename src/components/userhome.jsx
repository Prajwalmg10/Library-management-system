import { Route, Routes } from "react-router-dom";
import UserPoratl from "./userportal";

const UserHome = () => {
    return ( <div className="userhome">
        <Routes>
            <Route path="/" element={<UserPoratl/>}/>
        </Routes>
    </div> );
}
 
export default UserHome;