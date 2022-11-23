import { useEffect, useRef, useState } from 'react';

export const useFetchTabla = (tabla, id=undefined) => {

  const isMounted = useRef(true);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = 'http://localhost:4000/'+tabla+(id?'/'+id:'');

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [])

  useEffect(() => {

    setData(null);
    setLoading(true);
    setError(null);
    const fetchData = async () => {
      const run = isMounted.current;
      if (run) {
        const data = await fetch(url)
        const json = await data.json();
        setData(json);
        setLoading(false);
      }
    }

    fetchData()
      .catch( (error) => {
        if (isMounted.current) {
          setError(error);
          setLoading(false);
        }
        console.error(error);
      });
      
  }, [tabla, id, url]);

  return [data, loading, error];
}