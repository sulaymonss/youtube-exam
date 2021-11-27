// import { Games, Subscriptions, WatchLater } from '@mui/icons-material';
import { Route, Routes } from "react-router";
import "./App.scss";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

// pages
import Home from "./Pages/Home";
import Trending from "./Pages/Trending";
import Subscriptions from "./Pages/Subscriptions";
import Library from "./Pages/Library";
import History from "./Pages/History";
import WatchLater from "./Pages/WatchLater";
import Favourites from "./Pages/Favourites";
import LikedVideos from "./Pages/LikedVideos";
import Music from "./Pages/Music";
import Games from "./Pages/Games";
import Channel from "./Pages/Channel";
import Homee from "./ChannelPages/Homee";
import Videos from "./ChannelPages/Videos";
import Playlists from "./ChannelPages/Playlists";
import Channels from "./ChannelPages/Channels";
import Discussion from "./ChannelPages/Discussion";
import About from "./ChannelPages/About";
import VideoPlayer from "./Pages/VideoPlayer";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <Sidebar />

          <div className="routes">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/library" element={<Library />} />
              <Route path="/history" element={<History />} />
              <Route path="/watchlater" element={<WatchLater />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/likedvideos" element={<LikedVideos />} />
              <Route path="/music" element={<Music />} />
              <Route path="/games" element={<Games />} />
              <Route path="/c/:id" element={<Channel />}>
                <Route path="/c/:id" element={<Homee />} />
                <Route path="/c/:id/videos" element={<Videos />} />
                <Route path="/c/:id/playlists" element={<Playlists />} />
                <Route path="/c/:id/channels" element={<Channels />} />
                <Route path="/c/:id/discussion" element={<Discussion />} />
                <Route path="/c/:id/about" element={<About />} />
              </Route>
              <Route path="/video/:channelId/:id" element={<VideoPlayer/>} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
