import { useEffect, useState } from 'react';

export default function useFetch(endpoint) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(endpoint);
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data };
}
