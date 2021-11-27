import { useParams } from "react-router";
import channels from "../Data";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import "./VideoPlayer.scss";
import { Link } from "react-router-dom";

function VideoPlayer() {
  const { channelId, id } = useParams();

  return (
    <>
      {channels
        .filter((channel) => channel.id === Number(channelId))
        .map((ch) =>
          ch.videos
            .filter((video) => video.videoId === Number(id))
            .map((v, index) => {
              return (
                <div className="player" key={index}>
                  <div className="player__left">
                    <img
                      className="player__poster"
                      src={v.poster}
                      alt="video"
                    />
                    <h2 className="player__left-title">
                      Lorem ipsum dolor sit
                    </h2>
                    <div className="player__stats">
                      <span className="player__views">210k views</span>
                      <div className="player__likes-wrapper">
                        <span className="player__likes">
                          <ThumbUpOutlinedIcon /> 23k
                        </span>
                        <span className="player__likes">
                          <ThumbDownOutlinedIcon /> 1.4k
                        </span>
                        <button className="player__share">
                          <ShareOutlinedIcon /> Share
                        </button>
                        <button className="player__threedots">
                          <MoreHorizOutlinedIcon />
                        </button>
                      </div>
                    </div>
                    <hr className="player__line" />
                    <div className="player__desc">
                      <Link to={`/c/${ch.id}`}><img
                        className="player__ownerImg"
                        src={ch.ownerImg}
                        alt="video"
                      /></Link>
                      <div className="player__text">
                        <h2 className="player__owner">{ch.ownerName}</h2>
                        <span>Published on 14 Jun 2019</span>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Facilis amet vel illo quos enim quis repellendus
                          nihil fugit magni qui obcaecati cum, odio beatae
                          reiciendis molestias a aut aliquam, labore quo, quidem
                          voluptatem dolor recusandae ea rerum? Mollitia,
                          suscipit facilis?
                        </p>
                        <button type="button" className="player__showmore">
                          Show more
                        </button>
                      </div>
                      <div className="player__sub-wrapper">
                        <button type="button" className="player__subscribe">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="player__right">
                    <div className="player__right-top">
                      <h2>Next</h2>
                      <span>Autoplay</span>
                    </div>
                    <ul className="player__list">
                      {ch.videos
                        .filter(
                          (video) =>
                            video.videoId !== Number(id) && video.poster
                        )
                        .map((v) => {
                          return (
                            <li className="player__item" key={v.videoId}>
                              <Link to={`/video/${channelId}/${v.videoId}`}>
                                <img
                                  className="player__video-img"
                                  src={v.poster}
                                  alt="video"
                                />
                                <h3 className="player__video-title">
                                  Lorem ipsum dolor sit
                                </h3>
                                <div className="player__video-bottom">
                                  <span>210k views</span>
                                  <span>{ch.ownerName}</span>
                                </div>
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              );
            })
        )}
    </>
  );
}

export default VideoPlayer;
