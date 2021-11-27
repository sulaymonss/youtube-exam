import { Link } from 'react-router-dom';

// images and icons
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import blackLogo from '../../Assets/img/black-logo.svg'
import userImg from "../../Assets/img/user-img.png";

import './Header.scss'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__left">
          <MenuIcon className="header__menuIcon" />
          <Link to="/"><img className="header__logo" src={blackLogo} alt="logo" /></Link>
          <div className="header__search-wrapper">
            <input
              type="text"
              placeholder="Search"
              className="header__search"
            />
            <SearchIcon className="header__searchIcon" />
          </div>
        </div>
        <div className="header__right">
          <VideoCallOutlinedIcon  className="header__rightIcon" sx={{fontSize: 25}}/>
          <AppsIcon className="header__rightIcon" sx={{fontSize: 25}}/>
          <NotificationsNoneOutlinedIcon className="header__rightIcon" sx={{fontSize: 25}}/>
          <img src={userImg} alt="user img" />
        </div>
      </div>
    </header>
  );
}

export default Header;
