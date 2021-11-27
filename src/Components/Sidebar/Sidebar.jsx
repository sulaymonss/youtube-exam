import "./Sidebar.scss";
import { NavLink, Link } from "react-router-dom";
import channels from "../../Data";

// sidebar icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import QueueMusicOutlinedIcon from "@mui/icons-material/QueueMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <NavLink to="/">
            <HomeOutlinedIcon />
            Home
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/trending">
            <LocalFireDepartmentOutlinedIcon />
            Trending
          </NavLink>
        </li>
        <li className="sidebar__item subs">
          <NavLink to="/subscriptions">
            <SubscriptionsOutlinedIcon />
            Subscriptions
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/library">
            <FolderOutlinedIcon />
            Library
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/history">
            <RestoreOutlinedIcon />
            History
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/watchlater">
            <WatchLaterOutlinedIcon />
            Watch later
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/favourites">
            <StarBorderOutlinedIcon />
            Favourites
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/likedvideos">
            <FavoriteBorderOutlinedIcon />
            Liked videos
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/music">
            <QueueMusicOutlinedIcon />
            Music
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink to="/games">
            <SportsEsportsOutlinedIcon />
            Games
          </NavLink>
        </li>
        <li className="sidebar__item">
          <button className="sidebar__moreBtn">
            <KeyboardArrowDownOutlinedIcon />
            Show more
          </button>
        </li>
      </ul>
      <div className="sidebar__subs">
        <h2 className="sidebar__subs-title">Subscriptions</h2>
        <ul className="sidebar__channels">
          {channels
            .filter((channel) => channel.subscribed === true)
            .map((channel) => {
              return (
                <li className="sidebar__channel" key={channel.id}>
                  <Link to={`c/${channel.id}`}>
                    <img className="sidebar__ownerImg" src={channel.ownerImg} alt="owner img" width="26"/>
                    <h4 className="sidebar__channel-owner">{channel.ownerName}</h4>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
