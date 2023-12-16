import "./Header.css"
import {useState} from "react";
import {UserMenu} from "../UserMenu/UserMenu";


export const Header = () => {


    const [arrow, setArrow] = useState('⮟')
    const [showUserMenu, setShowUserMenu] = useState(false);

    const showMore = () => {
        if (!showUserMenu) {
            setArrow(arrow => '⮝')
            setShowUserMenu(showUserMenu => true);
        } else {
            setArrow(arrow => '⮟')
            setShowUserMenu(showUserMenu => false);
        }
    }


    return <>
        <div id="header">
            <div id="header-inside">

                <img id="logo" src="logo.webp" alt="megaK"/>

                <span id="show-more-button-header" onClick={showMore}>{arrow}</span>


                <div id="user">Tester Testowy</div>


                <img id="header-avatar" src="photo.jpg" alt="Avatar"/>

                {showUserMenu && <UserMenu/>}

            </div>
        </div>


    </>
}
