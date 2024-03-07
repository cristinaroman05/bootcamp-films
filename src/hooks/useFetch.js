import { useEffect, useState } from "react";

const useFetch = (API_URL) => {
  const [listFilms, setListFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (API_URL) {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          setListFilms(data.results);
          setLoading(false);
        });
      // .catch ((error) => {
      //   console.error("Error fetching data", error);
      //   setLoading(false);
      // });
    }
  }, [API_URL]);
  return [listFilms, loading];
};
export default useFetch;
