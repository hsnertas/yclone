import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
// I use ES7 snippets
function Header() {
    return (
        <div className="header">
            <MenuIcon/>
            <img className="header__logo" src="https://mediatrend.mediamarkt.com.tr/wp-content/uploads/2015/05/YouTube-logo-full_color-e1449696711622.jpg" alt="youtube"/>
        <input type="text"/>
        <SearchIcon/>
        <VideoCallIcon/>
        <AppsIcon/>
        <NotificationsIcon/>
        <Avatar
        src="https://avatars1.githubusercontent.com/u/61996861?s=460&u=33f721345c831fed83eb8a92cb3a289680bad660&v=4"
        alt="avatar"
        />
        
        </div>
    )
}

export default Header
