import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import './ChannelNav.scss'

function ChannelNav({ channel }) {
  return (
    <nav className="nav">
      <Link to={`/c/${channel.id}`}>Home</Link>
      <Link to={`/c/${channel.id}/videos`}>Videos</Link>
      <Link to={`/c/${channel.id}/playlists`}>Playlists</Link>
      <Link to={`/c/${channel.id}/channels`}>Channels</Link>
      <Link to={`/c/${channel.id}/discussion`}>Discussion</Link>
      <Link to={`/c/${channel.id}/about`}>About</Link>
      <SearchOutlinedIcon />
    </nav>
  );
}

export default ChannelNav;
