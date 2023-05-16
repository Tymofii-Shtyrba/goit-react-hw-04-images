import axios from "axios";

const baseURL = 'https://pixabay.com/api/';
const KEY = '34711882-d2bb8b31b4862e0108a3dd354';

export const getData = async (query, page) => {
  const response = await axios.get(baseURL, {
    params: {
      key: KEY,
      q: query,
      image_type: 'photo',
      page: page,
      per_page: 12,
    }
  })

  const { hits, totalHits } = response.data;  
  return { hits, totalHits };
}