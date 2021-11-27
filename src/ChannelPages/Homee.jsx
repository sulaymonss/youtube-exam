import { Link } from "react-router-dom";
import "./Homee.scss";

// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function Homee({ channel, videos }) {
  // slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <div className="homee">
      {videos
        .filter((video) => video.videoId === 11)
        .map((video) => {
          return (
            <Link
              className="homee__top"
              to={`/video/${channel.id}/${video.videoId}`}
            key={channel.id}>
              <img
                className="homee__top-img"
                src={video.poster}
                alt="top video"
              />
              <div className="homee__top-info">
                <h2 className="homee__top-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h2>
                <p className="homee__top-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus hic minima possimus libero ipsum fugiat alias in perferendis? Nesciunt odio error optio omnis eveniet minima doloremque blanditiis unde dolorum.
                </p>
                <span className="homee__top-views">
                  11k views · 6 months ago
                </span>
              </div>
            </Link>
          );
        })}
      <div className="homee__slider">
        <h2 className="homee__owner">{channel.ownerName} videos</h2>
        <Slider {...settings}>
          {videos
            .filter((video) => video.videoId !== 11)
            .map((video) => {
              return (
                <div className="homee__video" key={video.videoId}>
                  <Link
                    to={`/video/${channel.id}/${video.videoId}`}
                    className="homee__video-link"
                  >
                    <img
                      className="homee__poster"
                      src={video.poster}
                      alt="poster"
                    />
                    <h3>Lorem, ipsum.</h3>
                    <span>210k views · 3 months ago {channel.ownerName}</span>
                  </Link>
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
}

export default Homee;
