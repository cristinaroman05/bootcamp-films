import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import iconYoutube from "../../assets/images/icons8-play-100 5.png"

const API_KEY = process.env.REACT_APP_API_KEY;

const TrailerCard = ({ trailerId }) => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const API_URL_TRAILER = `${process.env.REACT_APP_API_URL}movie/${trailerId}/videos?api_key=`;
  const [trailerData] = useFetch(API_URL_TRAILER + API_KEY);
  useEffect(() => {
    if (trailerData?.results?.length > 0) {
      const videoKey = trailerData.results[0].key;
      setTrailerUrl(`https://www.youtube.com/watch?v=${videoKey}`);
    }
  }, [trailerData]);
  return (
    <div className="youtube-video">
      <img src={iconYoutube}></img>
      <a className="youtube-video__link" href={trailerUrl} target="_blank" rel="noreferrer">
        Ver en YouTube
      </a>
    </div>
  );
};
export default TrailerCard;
