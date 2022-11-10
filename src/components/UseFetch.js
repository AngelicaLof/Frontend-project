import { useState, useEffect } from 'react';

const useFetch = (url) => {
     const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

     useEffect(() => {

        const abortCon = new AbortController();

      fetch(url, { signal: abortCon.signal })
      .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch the data');
        }
         return res.json();
      })
      .then(data => {
          setData(data);
          setLoading(false);
      })
      .catch(err => {
          if ( err.name === 'Aborterror' ) {
              console.log('fetch aborted');
          }
          else {
        console.log(err.message);
          }
      })

      return () => abortCon.abort();
  }, [url]);

  return { data, loading }
}

export default useFetch;