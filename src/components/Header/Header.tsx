import React, { useState } from 'react';
import './Header.css';
import  MainPageLayout  from '../AvailableStudentsPage/MainPageLayout';
import { UserMenu } from '../UserMenu/UserMenu';

export const Header: React.FC = () => {
  const [arrow, setArrow] = useState<string>('⮟');
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);

  const showMore = () => {
    if (!showUserMenu) {
      setArrow('⮝');
      setShowUserMenu(true);
    } else {
      setArrow('⮟');
      setShowUserMenu(false);
    }
  };

  return (
    <>
      <div id="header">
        <div id="header-inside">
          <img id="logo" src="logo.webp" alt="megaK" />

          <span id="show-more-button-header" onClick={showMore}>
            {arrow}
          </span>

          <div id="user">Tester Testowy</div>

          <img id="header-avatar" src="photo.jpg" alt="Avatar" />

          {showUserMenu && <UserMenu />}
        </div>
      </div>
    </>
  );
};
