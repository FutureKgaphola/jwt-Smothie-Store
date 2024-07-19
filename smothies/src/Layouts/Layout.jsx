import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import AppFooter from "../components/AppFooter";

const Layout = () => {
    return ( 
        <>
        <NavBar />
        <Outlet/>
        </>
        
     );
}
 
export default Layout;