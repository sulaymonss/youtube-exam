import channels from "../Data";
import { Link } from "react-router-dom";
import "./Home.scss";
// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

function Home() {
  // slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
  };
  return (
    <div className="home">
      {channels
        .filter((channel) => channel.subscribed === false)
        .map((ch) => {
          return (
            <div className="home__channel">
              <div className="home__channel-top">
                <Link to={`c/${ch.id}`}>
                  <img
                    src={ch.ownerImg}
                    alt="owner img"
                    className="home__channel-ownerImg"
                  />
                <h2 className="home__owner">{ch.ownerName}</h2>
                </Link>
              </div>
              <Slider {...settings}>
                {ch.videos
                  .filter((video) => video.videoId !== 11)
                  .map((video) => {
                    return (
                      <div className="homee__video" key={video.videoId}>
                        <Link
                          to={`/video/${ch.id}/${video.videoId}`}
                          className="homee__video-link"
                        >
                          <img
                            className="homee__poster"
                            src={video.poster}
                            alt="poster"
                          />
                          <h3>Lorem, ipsum.</h3>
                          <span>210k views · 3 months ago {ch.ownerName}</span>
                        </Link>
                      </div>
                    );
                  })}
              </Slider>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
