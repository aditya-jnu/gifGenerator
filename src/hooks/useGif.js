import { useEffect, useState } from "react";
import axios from "axios";
  
function useGif(type) {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(true);
  const url =  "https://api.giphy.com/v1/gifs/random?api_key=Hwm5pBC0i3WUJnuLh7NQJWDmOl4CMaAd";

  async function fetchGif(type) {
    setLoading(true);
    const { data } = await axios.get((type)?(`${url}&tag=${type}`):(url));
    // in the aboove line we are doing destructuring jo output aa rha usme se data ko nikal de rhe ham
    //   the above line returns a promise
    console.log(data);
    const imgsrc = data.data.images.downsized_large.url;
    console.log(imgsrc);
    setGif(imgsrc);
    setLoading(false);
  }

  useEffect(() => {
    fetchGif(type);
  }, []);

  return {gif, loading, fetchGif};
}
export default useGif;
