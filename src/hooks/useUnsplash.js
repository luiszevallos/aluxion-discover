import {useState, useEffect} from 'react';

export default function useUnsplash(query) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const API_KEY =
        'a2f508640cb62f314e0e0763594d40aab1c858a7ef796184067c537a88b276aa';
      const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${query}&per_page=20`;

      const response = await fetch(URL);
      const data = await response.json();
      setPhotos(data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const refetch = () => getData();

  return {photos, refetch, loading};
}
