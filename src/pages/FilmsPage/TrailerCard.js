import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL_TRAILER = `${process.env.REACT_APP_API_URL}movie/`;

const TrailerCard = ({ trailerId }) => {
  const clip = "clip";
  const trailer = "trailer";
  const [trailerUrl, setTrailerUrl] = useState("");
  const [trailerData] = useFetch(API_URL_TRAILER + trailerId + "/videos?api_key=" + API_KEY);
  useEffect(() => {
    if (trailerData?.results?.length > 0) {
      const type = trailerData.results[0].type;
      const videoKey = trailerData.results.key;
      const url = type === "Clip" ? clip : trailer;
      setTrailerUrl(`https://www.youtube.com/watch?v=${videoKey}=${url}`);
    }
  }, [trailerData, trailerId]);
  console.log("trailers", trailerUrl);
  return (
    <div className="youtube-video">
      <img src="../../assets/images/icons8-play-100 5.png"></img>
      <a className="youtube-video__link" href={trailerUrl} target="_blank" rel="noreferrer">
        Ver en YouTube
      </a>
    </div>
  );
};
export default TrailerCard;
