import { Outlet } from "react-router-dom";
import LogOutBtn from "./LogOutBtn";
import BarsList from "./BarsList";
import Logo from "./Logo";
import NavBar from "./NavBar";
import NavBarContainer from "./NavBarContainer";
import Bars from "./Bars";


const Layout = () => {
    return (
        <div className="flex ">
            <NavBar>
                <NavBarContainer>
                    <Logo />
                    <BarsList>
                        <Bars />
                    </BarsList>
                </NavBarContainer>
                <LogOutBtn />
            </NavBar>

            <main className="w-[76%] lg:min-h-max">
                <Outlet />
            </main>
        </div >
    )
};

export default Layout;
