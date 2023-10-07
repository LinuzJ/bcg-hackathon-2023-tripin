import axios from "axios";

type Data = {
  budget: string;
  time_of_year: string;
  starting_position: string;
  climate: string;
  duration: string;
  destinations: string[];
};

const getAudio = async (data: Data) => {
  const AUDIO_API = process.env.NEXT_PUBLIC_AUDIO_API_URL;

  if (!AUDIO_API) {
    return;
  }

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const audio = await axios.post(AUDIO_API, data, { headers });

  console.log(audio);
};

export default getAudio;
