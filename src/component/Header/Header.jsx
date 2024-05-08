import React, { useState } from 'react';
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler';
import Layout from '../Layout/Layout';
import { Link, NavLink } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';
// import ProfileMenu from '../ProfieMenu/ProfieMenu';

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    // const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0()

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened && "-100%" }
        }
    }
    return (
        <section className="h-wrapper">
            <div className=" flexCenter paddings innerWidth h-container">
                <Link to={"/"}>
                    <img src="./realAgent.png" alt="logo" width={100} color='white' />
                </Link>
                <OutsideClickHandler
                    onOutsideClick={() => {
                        setMenuOpened(false)
                    }}
                >
                    <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                        {/* <a href="">Residencies</a> */}
                        {/* <a href="">Our value</a> */}
                        {/* <a href="">RoomMates</a> */}

                        <NavLink to={"/properties"}>Properties</NavLink>
                        <a href="mailto:realagent@gmail.com">Contact Us</a>

                        {/* Sign Up */}

                        <NavLink to={"/login"}>
                            <button className="button">
                                <a href="" >Get started</a>
                            </button>
                        </NavLink>



                    </div>
                </OutsideClickHandler>

                <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30} />
                </div>

            </div>
        </section>
    )
}

export default Header