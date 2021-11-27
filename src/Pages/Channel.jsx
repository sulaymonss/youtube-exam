import { Routes, Route, useParams } from "react-router";
import channels from "../Data"
import './Channel.scss'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChannelNav from "../Components/ChannelNav/ChannelNav";

// ChannelNav pages
import Homee from '../ChannelPages/Homee'
import Videos from '../ChannelPages/Videos'
import Channels from "../ChannelPages/Channels";
import Playlists from "../ChannelPages/Playlists";
import Discussion from "../ChannelPages/Discussion";
import About from "../ChannelPages/About";

function Channel() {
    const {id} = useParams()

    return (
        <>
            {channels.filter(channel => channel.id === Number(id))
            .map(channel =>{
                return(
                    <div className="channel" key={channel.id}>
                        <img className="channel__topImg" src={channel.topImg} alt="top img" />
                        <div className="channel__header">
                            <div className="channel__owner">
                                <img src={channel.ownerImg} alt="img" />
                                <div>
                                    <h3>{channel.ownerName}</h3>
                                    <span>{channel.subscribers+ 'K'} subscribed</span>
                                </div>
                            </div>
                            <div className="channel__btns">
                                <NotificationsNoneOutlinedIcon/>
                                <button className="sub">Subscribe</button>
                            </div>
                        </div>
                        <ChannelNav channel={channel}/>
                        
                        <Routes>
                            <Route path="/" element={<Homee channel={channel} videos={channel.videos}/>}/>
                            <Route path="/videos" element={<Videos/>}/>
                            <Route path="/channels" element={<Channels/>}/>
                            <Route path="/playlists" element={<Playlists/>}/>
                            <Route path="/discussion" element={<Discussion/>}/>
                            <Route path="/about" element={<About/>}/>
                        </Routes>
                    </div>
                )
            })}
        </>
    )
}

export default Channel
   