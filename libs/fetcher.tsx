import axios from "axios";

const fetcher = async (url: string) => {
  const res = await axios.get(url).then((res) => res.data);
  return res;
};

export default fetcher;
