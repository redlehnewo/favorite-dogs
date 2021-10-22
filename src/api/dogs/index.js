import axios from "axios";

export const fetchDogs = async (size) => {
  const requests = [];
  for (let i = 0; i < size; i++) {
    requests.push(axios.get("https://random.dog/woof.json?include=jpeg,jpg"));
  }
  const values = await Promise.all(requests);
  return values.map((item) => item?.data?.url);
};
