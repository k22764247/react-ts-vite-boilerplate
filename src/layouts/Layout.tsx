import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = function () {
    return (
        <div className="w-full h-screen flex flex-col">
            <Header />
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
